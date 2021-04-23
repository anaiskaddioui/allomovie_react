import { ErrorMessage, Field, FieldArray, Form, Formik, isInputEvent } from 'formik';
import { MDBInput } from 'mdbreact';
import React, { Component } from 'react';
import * as yup from 'yup';
import ApiMovie, { movieList } from './../../api-back/ApiMovie';
import Datalist from './../Datalist';




const initialValues = {

    search: '',
    language: '',
    keyAPI : ''
}


const validationSchema = yup.object().shape({

    search: yup.string()
                    .min(2, 'Ce champ doit contenir au minimum 2 caractères')
                    .max(500, 'Ce champs doit contenir au maximum 500 caractères').trim(),
    language: yup.string()
    
})

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies : [],
            first: ''
        }
    }

    submit = (values) => {
        const query = '?' + Object.keys(values)
            .map( key => key + '=' + values[key] + '&')
            .join('');
       
        ApiMovie.get('/search/movie' + query)
            .then(response => {

                this.setState({
                    movies : response.data.results
                })})
            .then( moviesApi => {
                const movies = moviesApi.map(movieList);
                this.props.updateMovies(movies);

            })
            . catch( err => console.log(err));
        

        console.log(query);
    }

    

    render() {


        return (


            <div className="form">

                <div>
                {this.state.movies.map((movie, key) => (
                    <div key = {key} value={movie.title}>{movie.title}</div>

                ))}
                </div>

                <Formik
                    initialValues={ { query: '', language: 'fr-FR' } }  
                    onSubmit={this.submit}
                    validationSchema = {validationSchema}
                >


                    {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
                    <Form className="shadow container-fluid" onSubmit={ handleSubmit }>


                        <div className="row p-0">
                            <div className="col-7">

                            <div className="form-inline active-cyan-3 active-cyan-4">
                                <i className="fas fa-search"></i>
                                <input
                                    list="movies" 
                                    className="form-control form-control-sm ml-3 w-75" 
                                    type="text" 
                                    placeholder="Search..."
                                    aria-label="Search"
                                    onChange = { handleChange } 
                                    onBlur = { handleBlur }
                                    />

                                <datalist id="movies">
                                    
                                   
                                       
                                </datalist>
                            </div>


                                <ErrorMessage component="small" name="search" className="text-danger" />

                            </div>                        

                            <div className="col-3 mt-4">

                                <select className="browser-default custom-select" 
                                        onChange = { handleChange } 
                                        onBlur = { handleBlur }
                                >
                                    <option defaultValue value="English">English</option>
                                    <option value="Français">Français</option>
                                </select>
                        
                                <ErrorMessage component="small" name="language" className="text-danger" />
                            </div>
                  
                            <div className="col-2">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary w-100 mt-3"
                                    disabled = { isSubmitting }
                                >
                                    Submit
                                </button>
                            </div>

                        </div>


                    </Form>
                )}

                </Formik>
            </div>
        )
    }
    
}

export default Search;
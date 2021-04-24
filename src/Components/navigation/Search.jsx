import { ErrorMessage, Form, Formik } from 'formik';
import React, { Component } from 'react';
import * as yup from 'yup';
import ApiMovie, { movieList } from './../../api-back/ApiMovie';
import './../../assets/Components.css';



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
            renderOneMovie: false
        }
    }

    componentDidMount() {
        ApiMovie.get('discover/movie')
            .then(response => {
                this.setState({ 

                    movies: response.data.results
                    
                });               
            })
    }

    handleChange = (e) => {
        console.log(e.target.value);
    }

    /*submit = (values) => {

        const query = '?' + Object.keys(values)
            .map( key => key + '=' + values[key] + '&')
            .join('');
       
        ApiMovie.get('/search/movie' + query)
            .then(response => {

                this.setState({
                    movie : response.data.results
                })})
            
            . catch( err => console.log(err));
        
        console.log(this.state.movie);
        console.log(query);

        
    }*/

    handleSubmit = () => {

        let titleChoice = document.querySelector('#titleChoice');

        this.state.movies.map((movie) => (
            titleChoice.value === movie.title && console.log('Le film ' + movie.title + ' existe dans la base')
        ))

        this.setState({
            renderOneMovie: true
        })

    }

    

    render() {


        return (


            <div className="form">

                <Formik
                    initialValues={ initialValues }  
                    onSubmit={this.submit}
                    validationSchema = {validationSchema}
                >


                    {({ handleSubmit, handleChange, handleBlur, isSubmitting, values }) => (
                    <Form className="shadow container-fluid" onSubmit={ this.handleSubmit }>


                        <div className="row p-0">
                            <div className="col-7">

                                <div className="form-inline active-cyan-3 active-cyan-4" style={{ color: 'whitesmoke' }}>
                                    <i className="fas fa-search"></i>
                                    <input
                                        list="movies" 
                                        className="form-control ml-3 w-75 col-sm-6 custom-select" 
                                        type="text" 
                                        placeholder="Search..."
                                        aria-label="Search"
                                        style={{ color: 'whitesmoke' }}
                                        onChange = { this.handleChange } 
                                        id = 'titleChoice'
                                        
                                        />

                                    <datalist id="movies"> 
                                        
                                        {this.state.movies.map((movie, key) => (
                                            <option key={key} value={movie.title}></option> 
                                        ))}
                                        
                                    </datalist>
                                </div>


                                <ErrorMessage component="small" name="search" className="text-danger" />

                            </div>                        

                            <div className="col-3 mt-4">

                                <select className="browser-default custom-select" 
                                        //onChange = { handleChange } 
                                        //onBlur = { handleBlur }
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
                                    //disabled = { isSubmitting }
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
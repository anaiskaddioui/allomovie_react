import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ErrorMessage, Form, Formik } from 'formik';
import * as yup from 'yup';
import './../../assets/Components.css';
import ApiMovie from './../../api-back/ApiMovie';
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact';


const initialValues = {

    search: '',
    language: 'en',
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
            movies : []
        }

        //this.routeChange = this.routeChange.bind(this)
    }

    componentDidMount() {
        ApiMovie.get('discover/movie')
            .then(response => {
                this.setState({ 

                    movies: response.data.results
                    
                });               
            })
    }

    /*handleChange = (e) => {
        console.log(e.target.value);
    }*/

    

    handleSubmit = (e) => {

        e.preventDefault()
        
        let titleChoice = document.querySelector('#titleChoice');

        this.state.movies.map((movie) => (
            titleChoice.value === movie.title && 
            this.routeChange(movie.title)
        ))
    }

    routeChange = (title) => {
      
        this.props.history.push('/renderone/' + title);
        console.log(title);
    }

    render() {


        return (


            <MDBContainer className="form container-fluid m-auto">

                <Formik
                    initialValues={ initialValues }  
                    onSubmit={this.handleSubmit}
                    validationSchema = {validationSchema}
                >


                    {({ handleSubmit, handleChange, handleBlur, isSubmitting, values }) => (
                    <Form className="shadow" onSubmit={ this.handleSubmit }>

                        <MDBRow className="justify-content-center align-items-center">
                            <MDBCol className="col-4 w-100">

                                <MDBRow className="form-inline active-cyan-3 active-cyan-4" style={{ color: 'whitesmoke' }}>
                                    <MDBCol className="col-1">
                                        <i className="fas fa-search"></i>
                                    </MDBCol>

                                    <MDBCol className="w-100">
                                        <input
                                            list="movies" 
                                            className="form-control w-100 custom-select" 
                                            type="search" 
                                            name="search"
                                            placeholder="Search..."
                                            aria-label="Search"
                                            style={{ color: 'whitesmoke' }}
                                            onChange = { handleChange } 
                                            id = 'titleChoice'
                                            value={values.search}
                                            
                                            />

                                        <datalist id="movies"> 
                                            
                                            {this.state.movies.map((movie, key) => (
                                                <option key={key} value={movie.title}></option> 
                                            ))}
                                            
                                        </datalist>
                                    </MDBCol>
                                </MDBRow>


                                <ErrorMessage component="small" name="search" className="text-danger" />

                            </MDBCol>                        

                            <MDBCol className="col-4 w-100" >

                                <select className="browser-default custom-select w-100" 
                                        onChange = { handleChange } 
                                        onBlur = { handleBlur }
                                >
                                    <option defaultValue value="en">English</option>
                                    <option value="fr">Français</option>
                                </select>
                        
                                <ErrorMessage component="small" name="language" className="text-danger" />
                            </MDBCol>
                  
                            <MDBCol className="col-4">
                                <MDBBtn 
                                    type="submit" 
                                    className="btn btn-primary w-100"
                                    disabled = { isSubmitting }
                                >
                                    Submit
                                </MDBBtn>
                            </MDBCol>

                        </MDBRow>


                    </Form>
                )}

                </Formik>
            </MDBContainer>
        )
    }
    
}

export default withRouter(Search);

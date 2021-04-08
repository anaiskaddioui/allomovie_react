import { ErrorMessage, Form, Formik } from 'formik';
import React, { Component } from 'react';
import * as yup from 'yup';


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

    render() {

        return (

            <div className="form">

                <Formik
                    initialValues={initialValues}
                    onSubmit={this.submit}
                    validationSchema={validationSchema}
                >

                {({ values }) => (
                    <Form className="shadow container-fluid">


                        <div className="row p-0">
                            <div className="col-7">

                            <div className="form-inline active-cyan-3 active-cyan-4">
                                <i className="fas fa-search"></i>
                                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search..."
                                    aria-label="Search" />
                            </div>


                                <ErrorMessage component="small" name="search" className="text-danger" />

                            </div>                        

                            <div className="col-3 mt-4">

                                <select className="browser-default custom-select">
                                    <option defaultValue value="English">English</option>
                                    <option value="Français">Français</option>
                                </select>
                        
                                <ErrorMessage component="small" name="language" className="text-danger" />
                            </div>
                  
                            <div className="col-2">
                                <button type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
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
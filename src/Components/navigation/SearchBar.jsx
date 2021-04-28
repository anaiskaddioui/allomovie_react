import { React } from 'react';
import { useFormik } from 'formik';
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import './../../assets/Components.css';


function SearchBar (props) {

    const search = useFormik({
        initialValues: {
            searchTitle: '',
            language: 'en'
        },
        onSubmit: values => {
            //console.log('Form data', values);
        }
    })    

    //console.log('Form values', search.values);


    return (

        <MDBContainer className="container-fluid m-auto">
            <form action="" className="form m-auto" onSubmit={search.handleSubmit}>

                <MDBRow className="justify-content-center align-items-center">

                    <MDBCol sm="12" className="col-lg-4 w-100">

                        <MDBRow className="form-inline active-cyan-3 active-cyan-4" style={{ color: 'whitesmoke' }}>
                            <MDBCol className="col-1">
                                <label htmlFor="search">
                                    <i className="fas fa-search"></i>
                                </label>
                            </MDBCol>

                            <MDBCol className="w-100">
                                
                                <input 
                                    type="search" 
                                    list="listMovies" 
                                    id="search" 
                                    name="searchTitle" 
                                    className="form-control w-100 custom-select" 
                                    placeholder="Search..."
                                    style={{ color: 'whitesmoke' }}
                                    onChange={ search.handleChange }
                                    value={ search.values.searchTitle }
                                />

                                <datalist id="listMovies"> 
                                                        
                                    { props.movies.map((movie, key) => (
                                        <option key={key} value={movie.title}></option> 
                                    ))}
                                        
                                </datalist>
                               
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>

                    <MDBCol sm="12" className="col-lg-4 w-100">
                        <select 
                            name="language" 
                            id="language" 
                            className="browser-default custom-select w-100 inputSearch" 
                            onChange={ search.handleChange }
                            onBlur={ search.handleBlur }
                        > 
                            <option value="en">English</option>
                            <option value="fr">Français</option>
                        </select>
                    </MDBCol>

                    <MDBCol sm="12" className="col-lg-4">
                        <MDBBtn 
                            type="submit" 
                            className="btn btn-primary w-100 font-weight-bold inputSearch"
                            onClick={() => props.takeData(search.values.searchTitle)}
                        >
                            Submit
                        </MDBBtn>
                    </MDBCol>

                </MDBRow>
            </form>
        </MDBContainer>
    )
}

export default SearchBar;

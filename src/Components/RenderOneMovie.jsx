import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBIcon } from 'mdbreact';
import React, { Component } from 'react';
import Image from './Image';


class RenderOneMovie extends Component {

    render() {

        
        return (

            <MDBContainer className="m-auto">

                <MDBBtn onClick={() => this.props.handleClick(false) } className="font-weight-bold mt-5 d-flex align-self-start">
                    <MDBIcon icon="angle-double-left" className="mr-2" />
                    Go back
                </MDBBtn>
                {this.props.movies.map((movie, key) => (
                    this.props.title === movie.title && 

                    <div className="mx-auto my-5 text-white" key={key}>  
                                           
                      
                        <h1 className="my-5 font-bold">
                            {movie.title}
                        </h1>
                    
                        <MDBRow>
                            <MDBCol className="d-flex justify-content-center">   
                                <Image image = {movie.poster_path} width="500" className="" />
                            </MDBCol>

                            <MDBCol>
                                <MDBRow className="my-5 fs-6">
                                    {movie.overview}
                                </MDBRow>

                                <hr />

                                <MDBRow className="font-italic my-5">
                                    <MDBCol className="my-5">
                                        Date : {movie.release_date}
                                    </MDBCol>
                                    <MDBCol className="my-5">
                                        Note : {movie.vote_average} / 10
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                                
                    </div>
                       
                ))}
            </MDBContainer>
        )
    }
}

export default RenderOneMovie;
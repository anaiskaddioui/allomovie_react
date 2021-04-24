import { MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React, { Component } from 'react';
import ApiMovie from './../api-back/ApiMovie';
import Image from './Image';


class RenderOneMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies : [],
            title : 'Thunder Force'
        }
    }


    extractParamsUrl = (get) => {
        get = get.split('&');

        console.log(get)
        var result = {};
    
        get.forEach(function(el){
            var param = el.split('=');
            param[0] = param[0].replace('?', '');
            result[param[0]] = param[1];
        });
    
        return result;
    }


    componentDidMount() {
        ApiMovie.get('discover/movie')
            .then(response => {
                this.setState({ 

                    movies: response.data.results
                    
                });               
            })
    }

    render() {

        let get = this.props.location.search;

        console.log(this.extractParamsUrl(get));

        return (

            <MDBContainer >
                {this.state.movies.map((movie) => (
                    this.state.title === movie.title && 

                    <div className="mx-auto my-5 text-white">  
                                           
                      
                        <h1 className="my-5 font-bold">
                            {movie.title}
                        </h1>
                    
                        <MDBRow>
                            <MDBCol>   
                                <Image image = {movie.poster_path} width="500" />
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
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBIcon } from 'mdbreact';
import React, { Component } from 'react';
import ApiMovie from './../api-back/ApiMovie';
import Image from './Image';


class RenderOneMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies : [],
            urlComing : document.location.href,
            title : ''
        }
    }

    componentDidMount() {
        ApiMovie.get('discover/movie')
            .then(response => {
                this.setState({ 

                    movies: response.data.results
                });               
            })
        this.getTitle();
    }
      
    getTitle = () => {

        this.setState({
            urlComing : this.state.urlComing.replace(/\/$/, ""),
            title: this.state.urlComing.substring (this.state.urlComing.lastIndexOf( "/" ) + 1 ).replace(/\/$/, "").replaceAll('%20', ' ')
        })
        
    }

    handleClick = () => {

        this.props.history.push('/')
    }
    

    render() {

        
        return (

            <MDBContainer >

                <MDBBtn onClick={ this.handleClick } className="font-weight-bold mt-5">
                    <MDBIcon icon="angle-double-left" className="mr-2" />
                    Go back
                </MDBBtn>
                {this.state.movies.map((movie, key) => (
                    this.state.title === movie.title && 

                    <div className="mx-auto my-5 text-white" key={key}>  
                                           
                      
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
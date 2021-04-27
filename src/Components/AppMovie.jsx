import { MDBContainer, MDBRow } from 'mdbreact';
import React, { Component } from 'react';
import ApiMovie from './../api-back/ApiMovie';
import Card from './Card';
import Image from './Image';
import Search from './navigation/Search';



class AppMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            id: '',
            isLoaded: false,
            values: { query: '', language: 'fr-FR' }
        }
    }

    componentDidMount() {
        ApiMovie.get('discover/movie')
            .then(response => {
                //console.log(response)
                this.setState({ 

                    movies: response.data.results,
                    isLoaded: true,
                    
                });
                 
                
            })
    }

    /*getMovie = async () => {
        ApiMovie.get('movie/{id_movie}')
            .then(response => {console.log(response)})

    } */  

    handleClick = async (id) => {
                 
        ApiMovie.get('movie/' + {id})
        .then(response => {console.log(response)});
    }


    render() {

        if (!this.state.isLoaded) {
            return <div className="text-center m-5 fs-1">Loading...</div> 
        } else {
        
            return(

                
                <MDBContainer>

                    <Search />
                
                        <MDBRow className="row">

                                            
                            {this.state.movies.map((movie, key) =>(
                        
                                <div className="col" key={ key }>
                                    <div className="row my-3">
                                        <div className="card m-3 m-auto" style= {{ width: 300 }}>
                                            <div className="row">
                                
                                                <div className="card-body" style={{ height: 700 }} > 
                                                    <div className="col-md-4 m-auto d-flex justify-content-center">
                                                        <Image image = {movie.poster_path} width= "250"/>
                                                    </div>
                                            
                                                    <Card id = {movie.id}
                                                        title = {movie.title}
                                                        release_date = {movie.release_date}
                                                        vote_average = {movie.vote_average} 
                                                        vote_count = {movie.vote_count} 
                                                        overview = {movie.overview}
                                                        movies = {this.state.movies}
                                                        //handleClick={this.handleClick(movie.id)}
                                                    />
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                            
                            ))}  
                                        
                        </MDBRow>
                    
                </MDBContainer>
            
            )
        }
    }
}

export default AppMovie;
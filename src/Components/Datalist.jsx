import React, { Component } from 'react';
import ApiMovie from './../api-back/ApiMovie';

class Datalist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }


    render() {

        return (

            <div>
                
                

                <div>
                    {this.state.movies.map((key, movie) => (
                        <div className="card">{movie.title}</div> 
                    ))}
                </div>
                
            </div>
        )
    }
}

export default Datalist;
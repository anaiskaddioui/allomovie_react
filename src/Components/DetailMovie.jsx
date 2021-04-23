import React, { Component } from 'react';
import '../assets/Components.css';

class DetailMovie extends Component {

    

    render() {

        return (
            <div className="container-fluid m-auto py-5 d-bloc">
                
              <div className="text-center">
                
                  <div className="card-body">
                    <h1 className="titre">{ this.props.title}</h1>

                    <hr />

                    <p>{ this.props.overviewUp } </p>
                  </div>
              </div>   
                                
            </div>
        )
    }
}

export default DetailMovie;
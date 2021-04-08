import { MDBBtn, MDBCard } from 'mdbreact';
import React, { Component } from 'react';
import './../assets/Components.css';
import DetailMovie from './DetailMovie';



class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //getMovie: this.props.getMovie,
            showOverview : false
        }
    }

    handleClick = () => {

        this.setState({
            showOverview: !this.state.showOverview
        })
    }

    
    render() {
        

        return (
          
         <div className="col-md-12">
            <div className="card-body">
                <div className="bg-info mb-4" style= {{ width: 200, borderRadius: 3}}>
                    <h5 className="card-title py-2" style= {{ width: 200, fontWeight: "bold" }}>{this.props.title}</h5>
                </div>
                <p className="card-text"><b>Date de sortie : </b>{this.props.release_date}</p>
                <p className="card-text"><b>Note des spectateurs : </b>{this.props.vote_average}/10</p>
                <p className="card-text"><small className="text-muted">({this.props.vote_count} votes)</small></p>
                
                <MDBBtn type="button" 
                      className="btn btn-info mx-5 mb-3"
                      onClick={this.handleClick}
                >
                {this.state.showOverview ? (<span>Fermer</span>) : (<span>Détail</span>)}
                </MDBBtn>

               
            </div>

            <div>

            {this.state.showOverview && (

                <MDBCard className="blocOverview">

                    <DetailMovie 
                        title = {this.props.title}
                        overviewUp = {this.props.overview}
                    />

                </MDBCard>
            )}

            </div>
        </div>
                 
         
        )

    }
        
}

export default Card;
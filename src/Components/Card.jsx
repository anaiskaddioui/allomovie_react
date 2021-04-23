import { MDBBtn, MDBCard, MDBIcon } from 'mdbreact';
import React, { Component } from 'react';
import './../assets/Components.css';
import DetailMovie from './DetailMovie';



class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showOverview : false,
            zIndex: 998
        }
    }

    hideContent = () => {

        this.setState({
            showOverview: false
        })
    }

    handleClick = () => {

        this.setState({
            showOverview: !this.state.showOverview
        })
    }

    fixZindex = () => {

        this.setState({
            zIndex: this.state.zIndex + 1 
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
                {this.state.showOverview ? (<span>Fermer</span>) : (<span>Résumé</span>)}
                </MDBBtn>

               
            </div>

            <div>

            {this.state.showOverview && (

                <MDBCard className="blocOverview" style={{ zIndex: this.state.zIndex }} onClick= { this.fixZindex }>
                    <MDBIcon icon="window-close" style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' }} onClick={ this.hideContent } title='Fermer'/>
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
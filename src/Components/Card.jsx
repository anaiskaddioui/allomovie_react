import { MDBBtn, MDBCard, MDBIcon, MDBLink } from 'mdbreact';
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
            zIndex: this.state.zIndex + 3
        })
    }

    
    
    render() {
        

        return (

          
         <div className="col-md-12">
            
            <div className="card-body" style={{ boxSizing: 'content-box' }}>

                <div className="bg-info mb-4" style= {{ width: 200, borderRadius: 3}}>
                    <h5 className="card-title py-2" style= {{ width: 200, fontWeight: "bold" }}>{this.props.title}</h5>
                </div>

                <p className="card-text"><b>Date de sortie : </b>{this.props.release_date}</p>
                <p className="card-text"><b>Note des spectateurs : </b>{this.props.vote_average}/10</p>
                <p className="card-text"><small className="text-muted">({this.props.vote_count} votes)</small></p>
                
                <div className="m-auto">
                    <MDBBtn type="button" 
                        className="btn btn-info mx-auto mb-3"
                        onClick={this.handleClick}
                    >
                    {this.state.showOverview ? (<span>Close</span>) : (<span>Short Overview</span>)}
                    </MDBBtn>
                </div>
                
                <div className="text-black">
                    <MDBLink onClick={() => this.props.goMoviePage(this.props.title)} className="m-auto">
                        <span className="mr-2">
                            Movie Page 
                        </span>
                        
                        <MDBIcon className="fas fa-arrow-circle-right"></MDBIcon>
                    </MDBLink>
                </div>
               
            </div>

            <div>

            {this.state.showOverview && (

                <MDBCard className="blocOverview" style={{ zIndex: this.state.zIndex }} onClick= { this.fixZindex }  >
                    <MDBIcon icon="window-close" style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' }} onClick={ this.hideContent } title='Close'/>
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
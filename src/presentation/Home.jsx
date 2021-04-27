import { MDBContainer } from 'mdbreact';
import React, { Component } from 'react';
import AppMovie from '../components/AppMovie';


class Home extends Component {


    render() {

        return (
            <MDBContainer className=" container m-auto py-5">
                
                    <AppMovie />                
                                
            </MDBContainer>
        )
    }
}

export default Home;
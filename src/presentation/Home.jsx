import React, { Component } from 'react';
import AppMovie from '../components/AppMovie';


class Home extends Component {
    
    render() {

        return (
            <div className="container-fluid m-0 p-0">
                
                <AppMovie />                
                                
            </div>
        )
    }
}

export default Home;
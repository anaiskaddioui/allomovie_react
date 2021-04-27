import { BrowserRouter } from 'react-router-dom';
import Navbar from './navigation/Navbar';
import Routes from './../routes/Routes';
import React, { Component } from 'react';


class AppRouting  extends Component {

  render() {

    return (
      <div>
        <BrowserRouter>
        
            <Navbar />
            
            <Routes />
            
        </BrowserRouter>
      </div>
    );
  }
  
}

export default AppRouting;
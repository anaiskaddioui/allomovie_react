import { BrowserRouter } from 'react-router-dom';
import Routes from './../routes/Routes';
import React, { Component } from 'react';
import Navbar from './navigation/Navbar';


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
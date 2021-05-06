import { BrowserRouter } from 'react-router-dom';
import Routes from './../routes/Routes';
import React, { Component } from 'react';
import Navbar from './navigation/Navbar';


class AppRouting  extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       home: false
    }
  }


  //A revoir : mettre à jour le render d'AppMovie si click hérité de Navbar "home" ou logo
  updateHome = (bool) => {

    this.setState({
      home : bool
    })
  }

  render() {

    return (
      <div>
        <BrowserRouter>

          <Navbar updateHome = {this.updateHome} />
                    
          <Routes home = {this.state.home} />
            
        </BrowserRouter>
      </div>
    );
  }
  
}

export default AppRouting;
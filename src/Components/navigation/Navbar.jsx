import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './../../assets/Components.css';


class Navbar extends Component {

  render() {

    return (
      
        <nav className="navbar navbar-expand-lg" >
          <div className="container-fluid fw-bold">
            <NavLink to="/home" className="navbar-brand nav-link" onClick={() => this.props.updateHome(true)}>AlloMovie</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/home" className="nav-link nav-link" activeClassName="mdb-color white-text" onClick={() => this.props.updateHome(true)}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/favoris" className="nav-link nav-link" activeClassName="mdb-color white-text" >Favoris</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

    )
  }
}

export default Navbar;
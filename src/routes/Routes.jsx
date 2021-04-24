import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../presentation/Home';
import Card from './../Components/Card';
import Error404 from '../error-404/Error404';
import Favoris from './../Components/Favoris';
import AppMovie from './../Components/AppMovie';
import DetailMovie from './../Components/DetailMovie';
import RenderOneMovie from './../Components/RenderOneMovie';

class Routes extends Component {

    render() {

        return (
            <div>
                <Switch>
                    <Route exact path='/' component= { Home } />
                    <Route path='/home' component= { Home } />
                    <Route path='/card' component= { Card } />
                    <Route path='/favoris' component= { Favoris } />
                    <Route path='/detail' component= { DetailMovie } />
                    <Route path='/movie/:id?' component= { AppMovie }/>
                    <Route path='/renderone' component={RenderOneMovie} />
                    <Route component= { Error404 } />
                </Switch>
                
            </div>
        )
    }
}

export default Routes;
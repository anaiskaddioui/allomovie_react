import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../presentation/Home';
import Card from './../Components/Card';
import Error404 from '../error-404/Error404';
import Favoris from './../Components/Favoris';
import AppMovie from './../Components/AppMovie';
import DetailMovie from './../Components/DetailMovie';
import RenderOneMovie from './../Components/RenderOneMovie';
import { createBrowserHistory } from "history";


const customHistory = createBrowserHistory();

const Routes = () => {

        return (
            <div>
                <Switch history={ customHistory }>
                    <Route exact path='/' component= { Home } />
                    <Route path='/home' component= { Home } />
                    <Route path='/card' component= { Card } />
                    <Route path='/favoris' component= { Favoris } />
                    <Route path='/detail' component= { DetailMovie } />
                    <Route path='/movie/:id?' component= { AppMovie }/>
                    <Route exact path='/renderone/:title' component={RenderOneMovie} />
                    <Route component= { Error404 } />
                </Switch>
                
            </div>
        )
  
}

export default Routes;
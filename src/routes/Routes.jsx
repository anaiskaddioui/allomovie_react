import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from './../presentation/Home';
import Card from './../components/Card';
import Favoris from './../components/Favoris';
import DetailMovie from './../components/DetailMovie';
import AppMovie from './../components/AppMovie';
import RenderOneMovie from './../components/RenderOneMovie';
import Error404 from './../error-404/Error404';
import { useState } from 'react';


const customHistory = createBrowserHistory();

const Routes = (props) => {

        return (
            <div>
                <Switch history={ customHistory }>
                    <Route exact path='/' component= { Home } />
                    <Route path='/home' component= { Home } />
                    <Route path='/card' component= { Card } />
                    <Route path='/favoris' component= { Favoris } />
                    <Route path='/detail' component= { DetailMovie } />
                    <Route path='/movie/:id?' component= { AppMovie } />
                    <Route exact path='/renderone/:title' component={RenderOneMovie} />
                    <Route component= { Error404 } />
                </Switch>
                
            </div>
        )
  
}

export default Routes;
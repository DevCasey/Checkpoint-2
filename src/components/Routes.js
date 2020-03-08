import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/login" component={LoginPage}/>
        </Switch>
    )
}

export default Router;
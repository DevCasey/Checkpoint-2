import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Restaurant from './containers/Restaurant';
import LoginPage from './components/LoginPage'
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'
import cookie from 'cookie';

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
        ? <Component {...props} />
        : <Redirect to='/login' /> }
        />
    )
}




const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/restaurant/:id" component={Restaurant} />
            <Route path="login" component={LoginPage} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default Router;
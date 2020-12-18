import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Home } from '../containers/Home';
import { Login } from '../containers/Login';
import {  AddMeet } from '../containers/AddMeet';

export const RouterApp = () => {
    return (
        <Router>
            <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/addmeet">
                    <AddMeet />
                </Route>
            </Switch>
            </div>
        </Router>
    )
}

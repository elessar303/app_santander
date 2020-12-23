import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    Router,
    Switch,
    Route
  } from "react-router-dom";
import { Home } from '../containers/Home';
import { Login } from '../containers/Login';
import {  AddMeet } from '../containers/AddMeet';
import { history } from "../helpers/history";
import { clearMessage } from "../actions/message";

export const RouterApp = ({lang}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
          dispatch(clearMessage());
        });
      }, [dispatch]);

    return (
        <Router history={history}>
            <div>
            <Switch>
                <Route exact path="/">
                    <Home 
                        lang={lang}
                    />
                </Route>
                <Route exact path="/login">
                    <Login 
                        lang={lang}
                    />
                </Route>
                <Route exact path="/addmeet">
                    <AddMeet 
                        lang={lang}
                    />
                </Route>
            </Switch>
            </div>
        </Router>
    )
}

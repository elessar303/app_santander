import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {
    Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Home } from '../containers/Home';
import { Login } from '../containers/Login';
import {  AddMeet } from '../containers/AddMeet';
import { history } from "../helpers/history";
import { clearMessage } from "../actions/message";

export const RouterApp = ({lang}) => {

    const { isLoggedIn } = useSelector(state => state.auth);

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
                    {!isLoggedIn ? <Redirect push to="/login" /> : <Home lang={lang} />}
                </Route>
                <Route exact path="/login">
                    {isLoggedIn ? <Redirect push to="/" /> : <Login lang={lang}/>}
                </Route>
                <Route exact path="/addmeet">
                    {!isLoggedIn ? <Redirect push to="/login" /> : <AddMeet lang={lang} />}
                </Route>
            </Switch>
            </div>
        </Router>
    )
}

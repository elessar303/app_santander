import React, { useState }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { LoginCmp } from '../components/LoginCmp'
import { loginAction } from "../actions/auth";
import { useHistory } from "react-router-dom";

export const Login = ({lang}) => {

    let history = useHistory();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { message } = useSelector(state => state.message);

    const handleChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const handleChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
    
        setLoading(true);
    
        dispatch(loginAction(username, password))
        .then(() => {
            history.push("/");
        })
        .catch(() => {
            setLoading(false);
        });
    };

    return (
        <LoginCmp 
            username={username}
            password={password}
            loading={loading}
            message={message}
            handleChangeUsername={handleChangeUsername}
            handleChangePassword={handleChangePassword}
            handleLogin={handleLogin}
            lang={lang}
        />
    )
}

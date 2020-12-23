import React from 'react';
import './Login.css';
import logo from '../img/icon.png'
import { data } from '../helpers/translate'

export const LoginCmp = ({username,password,loading,handleChangeUsername,handleChangePassword,handleLogin,message,lang}) => {
    return (
        <div className="text-center main">
            <main className="form-signin">
                <form onSubmit={handleLogin}>
                    <img className="mb-4" src={logo} alt="" width="72" height="57" />
                    <label htmlFor="inputEmail" className="visually-hidden"></label>
                    <div className="input-wrapper">
                        <input 
                            type="email" 
                            id="inputEmail" 
                            className="form-control" 
                            placeholder={data[lang].email}
                            autoComplete="email"
                            required="" 
                            autoFocus="" 
                            value={username}
                            onChange={handleChangeUsername}
                        />
                    <label htmlFor="stuff" className="fa fa-envelope input-icon text-danger"></label>
                    </div>
                    <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                    <div className="input-wrapper">
                        <input 
                            type="password" 
                            id="inputPassword" 
                            className="form-control" 
                            placeholder={data[lang].password} 
                            autoComplete="current-password"
                            required="" 
                            value={password}
                            onChange={handleChangePassword}
                        />
                        <label htmlFor="stuff" className="fa fa-unlock-alt input-icon text-danger"></label>
                    </div>
                    <div className="checkbox mb-3">
                    </div>
                    <button className="w-100 btn btn-lg btn-danger" type="submit">{data[lang].signin}</button>
                    <p className="mt-5 mb-3 text-muted">© 2017-2020</p>
                </form>
                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}
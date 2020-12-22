import React from 'react';
import './Login.css';
import logo from '../img/icon.png'

export const LoginCmp = ({username,password,loading,handleChangeUsername,handleChangePassword,handleLogin}) => {
    return (
        <div className="text-center main">
            <main className="form-signin">
                <form onSubmit={handleLogin}>
                    <img className="mb-4" src={logo} alt="" width="72" height="57" />
                    <h6 className="h3 mb-3 fw-normal btn-danger rounded">Please sign in</h6>
                    <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
                    <input 
                        type="email" 
                        id="inputEmail" 
                        className="form-control" 
                        placeholder="Email address" 
                        required="" 
                        autoFocus="" 
                        value={username}
                        onChange={handleChangeUsername}
                    />
                    <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                    <input 
                        type="password" 
                        id="inputPassword" 
                        className="form-control" 
                        placeholder="Password" 
                        required="" 
                        value={password}
                        onChange={handleChangePassword}
                    />
                    <div className="checkbox mb-3">
                    </div>
                    <button className="w-100 btn btn-lg btn-danger" type="submit">Iniciar Sesión</button>
                    <p className="mt-5 mb-3 text-muted">© 2017-2020</p>
                </form>
            </main>
        </div>
    )
}
import React from 'react'
import {useGetCurrentTemp} from '../hooks/useGetCurrentTemp'

export const NavbarCmp = () => {

    const { temp,loading } = useGetCurrentTemp();

    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <span className="navbar-brand"> Usuario </span> 
                <span className="navbar-brand">
                    {loading && <i className="fas fa-spinner"></i>}
                    <i className="fas fa-temperature-low"></i> {temp}</span>
                <button className="btn btn-outline-danger">
                    <i className="fas fa-sign-out-alt"></i>
                    <span> Salir</span>
                </button>
            </div>
        </div>
    )
}

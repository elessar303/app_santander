import React,{useState} from 'react'
import {useGetCurrentTemp} from '../hooks/useGetTempsHooks'
import { useGetNewMeets } from '../hooks/useMeetupsHooks'
import { checkNewMeets } from '../services/apibackend'
import { NewMeetsListCmp } from './NewMeetsListCmp'
import logo from '../img/logo.png'

export const NavbarCmp = () => {

    const [showList, setShowList] = useState('')
    
    const { temp,loading } = useGetCurrentTemp();
    const { newMeets } = useGetNewMeets('junior@mail.com');

    const handleViewNotifications = (userEmail) =>{

        if(showList === 'show'){
            setShowList('')
        }else{
            setShowList('show')
        }

        checkNewMeets('junior@mail.com')

    }

    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <span className="navbar-brand"> 
                    <img src={ logo } alt="Santander" width="100px"/>
                </span> 
                    <NewMeetsListCmp 
                        data = {newMeets}
                        handleViewNotifications = {handleViewNotifications}
                        showList = {showList}
                    />
                    <span className="navbar-brand" title="Temperatura actual">
                        {loading && <i className="fas fa-spinner"></i>}
                         {temp} <i className="fas fa-temperature-low"></i> 
                    </span>
                    <span className="navbar-brand">
                    <button className="btn btn-outline-danger">
                        <i className="fas fa-sign-out-alt"></i>
                        <span> Salir</span>
                    </button>
                </span>
            </div>
        </div>
    )
}

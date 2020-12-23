import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {useGetCurrentTemp} from '../hooks/useGetTempsHooks'
import { useGetNewMeets } from '../hooks/useMeetupsHooks'
import { checkNewMeets } from '../services/apibackend'
import { NewMeetsListCmp } from './NewMeetsListCmp'
import { LanguageSelector } from './LanguageSelector'
import { logoutAction } from "../actions/auth";
import { langAction } from '../actions/language';
import { data } from '../helpers/translate';
import logo from '../img/logo.png'

export const NavbarCmp = ({lang}) => {

    const dispatch = useDispatch();

    const { isLoggedIn, user } = useSelector(state => state.auth);
    const [showList, setShowList] = useState('')
    const [showLangs, setShowLangs] = useState('')
    const [loadingOut, setLoadingOut] = useState(false);
    const { temp,loading } = useGetCurrentTemp();
    const { newMeets } = useGetNewMeets(user);

    const handleViewNotifications = (userEmail) =>{

        if(showList === 'show'){
            setShowList('')
            checkNewMeets(userEmail)
        }else{
            setShowList('show')
        }
        checkNewMeets(userEmail)
    }

    const handleChangeLanguage = (e,selectedLang) =>{

        console.log(selectedLang)

        if(selectedLang){
            dispatch(langAction(selectedLang))
        }

        if(showLangs === 'show'){
            setShowLangs('')
        }else{
            setShowLangs('show')
        }
        
    }

    const handleLogout = (e) => {
        e.preventDefault();
    
        setLoadingOut(true);
    
        dispatch(logoutAction())
    };

    if (!isLoggedIn) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <span className="navbar-brand"> 
                    <img src={ logo } alt="Santander" width="100px"/>
                </span> 
                <span className="navbar-brand" title="Temperatura actual">
                        {loading && <i className="fas fa-spinner"></i>}
                         {temp} <i className="fas fa-temperature-low"></i> 
                    </span>
                    <NewMeetsListCmp 
                        data = {newMeets}
                        handleViewNotifications = {handleViewNotifications}
                        showList = {showList}
                        user = {user}
                        lang = {lang}
                    />
                    <span className="navbar-brand" title={data[lang].user}>
                        {loadingOut && <i className="fas fa-spinner"></i>}
                         <i className="far fa-user text-danger"></i> {user && user.name}
                         {user && user.isAdmin && <small className="text-muted nav-user-rol"> - Admin</small>}
                         {user && !user.isAdmin && <small className="text-muted nav-user-rol"> - User</small>}
                    </span>
                    <LanguageSelector 
                        handleChangeLanguage = {handleChangeLanguage}
                        showList = {showLangs}
                        lang = {lang}
                    />
                    <span className="navbar-brand">
                    <a className="btn btn-outline-danger" href="# " onClick={handleLogout} >
                        <i className="fas fa-sign-out-alt"></i>
                        <span>{data[lang].singout}</span>
                    </a>
                </span>
            </div>
        </div>
    )
}

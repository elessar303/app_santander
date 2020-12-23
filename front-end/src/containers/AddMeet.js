import React, { useState } from 'react'
import { useHistory, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavbarCmp } from '../components/NavbarCmp'
import { AddMeetCmp } from '../components/AddMeetCmp'
import { useGetUsers } from '../hooks/useUsersHooks'
import { useGetFutureTemp } from '../hooks/useGetTempsHooks'
import { saveMeet } from '../services/apibackend'

import moment from 'moment'

export const AddMeet = ({lang}) => {

    let history = useHistory();
    const { user } = useSelector(state => state.auth);
    const [inputDate, setInputDate] = useState(moment().format('YYYY-MM-DD'))
    const { temp,loadingTemp } = useGetFutureTemp(moment(inputDate).format('X'));
    const { dataUsers } = useGetUsers();

    const [usersSelected, setUsersSelected] = useState([])

    const invitados = usersSelected.length
    const handleInputChangeDate = (e) =>{
        setInputDate(e.target.value)
    }

    const handleCheckUser = (checked,user) =>{
        if(checked){
            setUsersSelected([...usersSelected,user])
        }
        if(!checked){
            const removeIndex = usersSelected.map(function(item) { return item.id; }).indexOf(user.id);
            usersSelected.splice(removeIndex, 1);
            setUsersSelected([...usersSelected])
        }
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(usersSelected.length === 0){
            alert('No se han agregados invitados al MeetUp!')
            return false
        }

        usersSelected.forEach(function (element) { element.notify = false; element.checked = false;});
        
        const data = {
            date:inputDate,
            temp:temp,
            guests:usersSelected
        }

        const resp = await saveMeet(data)

        if(resp.status && resp.status < 400){
            alert('MeetUp Agendada!')
            history.push("/");
        }else{
            alert('Error al almacenar MeetUp!')
        }
    
    }

    const handleCancel = async (e) =>{
        e.preventDefault()
        history.push("/");
    }
    
    let birras = 0
    if(temp<20){
        birras = Math.ceil(invitados*0.75)
    }else if(temp>=20 && temp<24){
        birras = Math.ceil(invitados*1)
    }else{
        birras = Math.ceil(invitados*2)
    }

    const cajas = Math.ceil(birras/6)

    if(user && !user.isAdmin){
        alert("No tiene permiso para acceder a este modulo")
        return <Redirect to="/" />;
    }

    return (
        <div>
            <NavbarCmp 
                lang={lang}
            />
            <AddMeetCmp  
                temp = {temp}
                loadingTemp = {loadingTemp}
                birras = {birras}
                cajas = {cajas}
                invitados = {invitados}
                dateMeet = {inputDate}
                handleInputChangeDate = {handleInputChangeDate}
                usuarios = {dataUsers}
                handleCheckUser = {handleCheckUser}
                handleSubmit = {handleSubmit}
                handleCancel = {handleCancel}
                lang={lang}
            />
        </div>
    )
}

import React from 'react'
import {useGetMeetupsList} from '../hooks/useMeetupsHooks'
import { checkInMeet } from '../services/apibackend'
import moment from 'moment'

export const MeetupsList = () => {

    const { data,loading } = useGetMeetupsList(); 

    const handleCheckInMeet = (meetId) =>{
        checkInMeet('junior@mail.com', meetId)
    }
    
    return (
        <div className="container">
            <div className="row justify-content-md-center">
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="5">Lista de Meetups
                        <a type="button" className="btn" href="addmeet"><i className="far fa-plus-square"></i></a>
                        </th>
                        
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Invitados</th>
                        <th scope="col">Temperatura</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {loading && <tr className="animate__animated animate__flash"><td colSpan="5" className="text-center"><i className="fas fa-spinner"></i></td></tr>}
                    {
                        data.map( (meet,index) => 
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{moment(meet.date).format('DD-MM-YYYY')}</td>
                                <td>{meet.guests.length}</td>
                                <td>{meet.temp} º</td>
                                <td>
                                { 
                                moment(meet.date).format('DD-MM-YYYY') < moment().format('DD-MM-YYYY') && meet.guests.find( user => (user.email === 'junior@mail.com' && user.checked === false) ) &&
                                    <button className="btn btn-outline-primary" onClick={() => handleCheckInMeet(meet._id)}>
                                        <i className="fas fa-check"></i>
                                        <span> Check In</span>
                                    </button>
                                }

                                { 
                                    meet.guests.find( user => (user.email === 'junior@mail.com' && user.checked === true) ) && 
                                    <button className="btn btn-primary">
                                        <i className="fas fa-check"></i>
                                    </button>

                                }
                                </td>
                            </tr>
                        )
                    }
                    {(data.length === 0) &&  <tr className="animate__animated animate__flash"><td colSpan="5" className="text-center">Sin meets creadas</td></tr>}
                </tbody>
            </table>
            </div>
        </div>
    )
}

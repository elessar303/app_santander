import React from 'react'
import {useGetMeetupsList} from '../hooks/useMeetupsHooks'

export const MeetupsList = () => {

    const { data,loading } = useGetMeetupsList(); 
    
    return (
        <div className="container">
            <div className="row justify-content-md-center">
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="4">Lista de Meetups
                        <a type="button" className="btn" href="addmeet"><i className="far fa-plus-square"></i></a>
                        </th>
                        
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Invitados</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {loading && <tr className="animate__animated animate__flash"><td colSpan="4" className="text-center"><i className="fas fa-spinner"></i></td></tr>}
                    {
                        data.map( (meet,index) => 
                            <tr key={meet.id}>
                                <td>{index+1}</td>
                                <td>{meet.date}</td>
                                <td>0</td>
                                <td>acciones</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

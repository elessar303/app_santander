import React from 'react'
import {  useSelector } from "react-redux";
import {useGetMeetupsList} from '../hooks/useMeetupsHooks'
import { checkInMeet } from '../services/apibackend'
import moment from 'moment'
import { data as langs } from '../helpers/translate';

export const MeetupsListCmp = ({lang}) => {

    const { data,loading } = useGetMeetupsList(); 
    const { user } = useSelector(state => state.auth);

    const handleCheckInMeet = (meetId) =>{
        checkInMeet(user.email, meetId)
    }
    
    return (
        <div className="container">
            <div className="row justify-content-md-center">
            <table className="table table-light table-hover caption-top">
                <caption>
                    {langs[lang].meet_list}
                    {user && user.isAdmin && <a type="button" className="btn btn-lg" href="addmeet" title={langs[lang].add_meet}><i className="far fa-plus-square text-danger"></i></a>}
                </caption>  
                <thead className="table-danger">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{langs[lang].date}</th>
                        <th scope="col">{langs[lang].guests}</th>
                        <th scope="col">{langs[lang].temp}</th>
                        <th scope="col">{langs[lang].actions}</th>
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
                                moment(meet.date).format('DD-MM-YYYY') < moment().format('DD-MM-YYYY') && user && meet.guests.find( guest => (guest.email === user.email && guest.checked === false) ) &&
                                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleCheckInMeet(meet._id)}>
                                        <i className="fas fa-check"></i>
                                        <span>{langs[lang].check_in}</span>
                                    </button>
                                }

                                { 
                                    user &&  meet.guests.find( guest => (guest.email === user.email && guest.checked === true) ) && 
                                    <button className="btn btn-sm btn-danger">
                                        <i className="fas fa-check"></i>
                                    </button>

                                }
                                </td>
                            </tr>
                        )
                    }
                    {(data.length === 0) &&  <tr className="animate__animated animate__flash"><td colSpan="5" className="text-center">{langs[lang].no_meets}</td></tr>}
                </tbody>
            </table>
            </div>
        </div>
    )
}

MeetupsListCmp.defaultProps = {
    lang:'es'
}

import React from 'react'
import moment from 'moment'
import { data } from '../helpers/translate';

export const AddMeetCmp = ({temp,loadingTemp, birras, cajas, invitados, dateMeet, handleInputChangeDate, usuarios, handleCheckUser, handleSubmit,handleCancel, lang}) => {

    return (
        <div className="container">
            <div className="row justify-content-md-center">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                    <b>{data[lang].add_meet}</b>
                </div>
                <div className="col-12">
                    <div className="input-group lg-3">
                    <input 
                            type="date" 
                            className="form-control" 
                            id="date" 
                            min={moment().format('YYYY-MM-DD')} 
                            value={dateMeet}
                            onChange={ handleInputChangeDate }
                        />
                        <span className="input-group-text" id="basic-addon2">
                            {loadingTemp && <i className="fas fa-spinner"></i>} 
                            {data[lang].temp} <i className="fas fa-temperature-low"></i> {temp}
                        </span>
                        <span className="input-group-text"> {data[lang].guests} = <b>{invitados}</b></span>
                        <span className="input-group-text"> {data[lang].boxes} = <b>{cajas}</b></span>
                        <span className="input-group-text"> {data[lang].beers} = <b>{birras}</b></span>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-md-center">
                    <div className="col-6">
                        <ul className="list-group list-group-flush">
                                {
                                usuarios.map( (user,index) => 
                                <li key={index} className="list-group-item-light list-group-item d-flex justify-content-between align-items-center form-check form-switch">
                                    {user.name}
                                    <span><input className="form-check-input" type="checkbox" onChange={ (e) => handleCheckUser(e.target.checked,user) }/></span>
                                </li>
                                )
                            }

                        </ul>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-2">
                        <button type="submit" className="btn btn-danger">{data[lang].save}</button>
                        
                    </div>
                    <div className="col-2">
                        <button type="submit" className="btn btn-danger" onClick={handleCancel}>{data[lang].cancel}</button>
                    </div>
                    
                </div>
            </form>
            </div>
        </div>
    )
}

import React from 'react'
import moment from 'moment'

export const AddMeetCmp = ({temp,loadingTemp, birras, cajas, invitados, dateMeet, handleInputChangeDate, usuarios, handleCheckUser, handleSubmit}) => {

    return (
        <div className="container">
            <div className="row justify-content-md-center">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                    <b>Agregar Meet</b>
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
                            Temperatura <i className="fas fa-temperature-low"></i> {temp}
                        </span>
                        <span className="input-group-text"> Invitados = <b>{invitados}</b></span>
                        <span className="input-group-text"> Cajas = <b>{cajas}</b></span>
                        <span className="input-group-text"> Birras = <b>{birras}</b></span>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-md-center">
                    <div className="col-6">
                        <ul className="list-group list-group-flush">
                                {
                                usuarios.map( (user,index) => 
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center form-check form-switch">
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
                        <button type="submit" className="btn btn-primary">Añadir meet</button>
                    </div>
                    
                </div>
            </form>
            </div>
        </div>
    )
}

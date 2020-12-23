import React from 'react'
import moment from 'moment'
import { uid } from 'uid';
import { data as langs } from '../helpers/translate';

export const NewMeetsListCmp = ({data,handleViewNotifications, showList, user, lang}) => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavDropdown" >
            {data.length > 0 &&
                <ul className="navbar-nav">
                    <li className="nav-item dropdown" key={uid()}>
                    <a  className="nav-link dropdown-toggle"
                        href="# " 
                        id="navbarDropdownMenuLink" 
                        role="button" 
                        onClick={() => handleViewNotifications(user.email,showList)}>
                        <i className="fas fa-bell"></i> 
                        {data.length}
                    </a>
                    
                    <ul className={`dropdown-menu new-list-items ${showList}`} aria-labelledby="navbarDropdownMenuLink" >
                    {
                        data.map( (meet,index) => 
                            <li key={index} className="list-group-item"> 
                                {langs[lang].new_meet} {langs[lang].day} {moment(meet.date).format('DD-MM-YYYY')} 
                                 <i className="fas fa-temperature-low"></i> {meet.temp}
                                <i ></i>
                            </li>
                        )
                    }
                    </ul>
                    </li>
            </ul>
            }
        </div>
    )
}

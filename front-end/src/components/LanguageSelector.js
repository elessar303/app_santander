import React from 'react'
import PropTypes from 'prop-types'
import {data} from '../helpers/translate' 

export const LanguageSelector = ({handleChangeLanguage,showList,lang}) => {
    return (
        <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block ml-auto">
            <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <a  className="nav-link dropdown-toggle" href="# " 
                    onClick={() => handleChangeLanguage(showList)}
                    id="navbarDropdown" role="button" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"><i className="fas fa-globe"></i> {data[lang][lang]}</a>{}
                <div className={`dropdown-menu dropdown-menu-right ${showList}`} aria-labelledby="navbarDropdown">
                <a onClick={() => handleChangeLanguage(showList,'es')} className="dropdown-item" href="# ">{data[lang].es}</a>
                <a onClick={() => handleChangeLanguage(showList,'en')} className="dropdown-item" href="# ">{data[lang].en}</a>
                </div>
            </li>
            </ul>
        </div>
    )
}

LanguageSelector.propTypes = {
    handleChangeLanguage: PropTypes.func.isRequired,
    showList: PropTypes.string.isRequired
}

LanguageSelector.defaultProps = {
    lang:'es'
}

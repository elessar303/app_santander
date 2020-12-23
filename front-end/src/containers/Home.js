import React from 'react'
import { NavbarCmp } from '../components/NavbarCmp'
import { MeetupsListCmp } from '../components/MeetupsListCmp'

export const Home = ({lang}) => {
    return (
        <div>
            <NavbarCmp 
                lang={lang}
            />
            <MeetupsListCmp 
                lang={lang}
            />
        </div>
    )
}

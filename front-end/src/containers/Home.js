import React from 'react'
import { NavbarCmp } from '../components/NavbarCmp'
import { MeetupsList } from '../components/MeetupsList'

export const Home = () => {
    return (
        <div>
            <NavbarCmp />
            <MeetupsList />
        </div>
    )
}

import React from 'react'
import { RouterApp } from '../router/RouterApp'
import { useSelector } from "react-redux";
export const Main = () => {

    const { lang } = useSelector(state => state.language);

    return (
        <div>
            <RouterApp 
                lang={lang}
            />
        </div>
    )
}

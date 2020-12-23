import { useEffect, useState } from "react"
import { getMeetups,getNewMeets, checkNewMeets } from "../services/apibackend";

export const useGetMeetupsList= ( ) =>{

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect( () => {

        getMeetups().then( data => {
            setState({
                data:data,
                loading:false
            })
        })

    },[])

    return state;
}

export const useGetNewMeets = ( user ) =>{

    const userEmail = (user && user.email) ? user.email:''
    const [state, setState] = useState({
        newMeets:[]
    });

    useEffect( () => {

        getNewMeets(userEmail).then( data => {
            setState({
                newMeets:data
            })
        })

    },[userEmail])

    return state;
}

export const useCheckNewMeets = ( user ) =>{

    const userEmail = (user && user.email) ? user.email:''

    const [state, setState] = useState({
        newMeets:[]
    });

    useEffect( () => {

        checkNewMeets(userEmail).then( data => {
            setState({
                newMeets:data
            })
        })

    },[userEmail])

    return state;
}
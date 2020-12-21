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

export const useGetNewMeets = ( userEmail ) =>{

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

export const useCheckNewMeets = ( userEmail ) =>{

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
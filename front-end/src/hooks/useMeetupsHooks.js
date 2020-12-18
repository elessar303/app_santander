import { useEffect, useState } from "react"
import { getMeetups } from "../services/apibackend";

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
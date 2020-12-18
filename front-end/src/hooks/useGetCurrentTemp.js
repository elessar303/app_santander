import { useEffect, useState } from "react"
import { getCurrentTemp } from "../services/apiweather";

export const useGetCurrentTemp= ( ) =>{

    const [state, setState] = useState({
        temp:0,
        loading:true
    });

    useEffect( () => {

        getCurrentTemp().then( data => {
            setState({
                temp:data,
                loading:false
            })
        })

    },[])

    return state;
}
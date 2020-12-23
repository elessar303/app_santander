import { useEffect, useState } from "react"
import { getCurrentTemp, getFutureTemp } from "../services/apiweather";

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

export const useGetFutureTemp= ( date ) =>{

    const [state, setState] = useState({
        temp:0,
        loadingTemp:true
    });

    useEffect( () => {

        getFutureTemp(date).then( data => {
            setState({
                temp:data,
                loadingTemp:false
            })
        })

    },[date])
    
    return state;
}
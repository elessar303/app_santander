import { useEffect, useState } from "react"
import { getUsers } from "../services/apibackend";

export const useGetUsers = ( category ) =>{

    const [state, setState] = useState({
        dataUsers:[],
    });

    useEffect( () => {

        getUsers( ).then( users => {
            setState({
                dataUsers:users
            })
        })

    },[])

    return state;
}
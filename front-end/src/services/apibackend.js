import { apiBackend } from  '../config/api'

export const getMeetups = async () => {

    try {
        const response = await apiBackend.get('meets');
        return response.data.meets;
    } catch (error) {
        console.log(JSON.stringify(error))
        return 0; 

    }
    
}

export const getUsers = async () => {

    try {
        const response = await apiBackend.get('users');
        return response.data;
    } catch (error) {
        console.log(JSON.stringify(error))
        return 0; 

    }
    
}

export const saveMeet = async (data) => {

    try {
        const response = await apiBackend.post('meet',data);
        return response;
    } catch (error) {
        console.log(JSON.stringify(error))
        return 0; 

    }

}

export const getNewMeets = async (userEmail) => {

    const options = { params: { userEmail: userEmail } };

    try {
        const response = await apiBackend.get('new_meets',options);
        return response.data.meets;
    } catch (error) {
        console.log(JSON.stringify(error))
        return 0; 

    }

}

export const checkNewMeets = async (userEmail) => {

    const data = { userEmail: userEmail } ;

    try {
        const response = await apiBackend.post('check_new_meets',data);
        return response.data.meets;
    } catch (error) {
        console.log(JSON.stringify(error))
        return 0; 

    }

}

export const checkInMeet = async (userEmail, meetId) => {

    const data = { userEmail: userEmail, id:meetId } ;

    try {
        const response = await apiBackend.post('check_in_meet',data);
        return response.data.meets;
    } catch (error) {
        console.log(JSON.stringify(error))
        return 0; 

    }

}

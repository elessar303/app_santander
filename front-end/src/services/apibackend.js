const axios = require('axios').default;

exports.getMeetups = async () => {

    const apiBackend = axios.create({
        timeout: 1000
    });

    try {
        const response = await apiBackend.get('meets');
        return response.data;
    } catch (error) {
        console.log(JSON.stringify(error))
        return 0; 

    }
    
}
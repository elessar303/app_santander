const axios = require('axios').default;
const apiKey = `d19ba85aadmsh6f3dc4e91a709ccp15a4c7jsnd6966474d4d7`

exports.getCurrentTemp = async () => {

    const apiWeather = axios.create({
        baseURL: 'https://weatherbit-v1-mashape.p.rapidapi.com/',
        timeout: 1000,
        headers: { 'x-rapidapi-key': apiKey,'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com' }
    });

    var options = { params: {lon: -58.3712, lat: -34.6083, lang: 'es'} };

    try {
        const response = await apiWeather.get('current',options);
        return response.data.data[0].temp;
    } catch (error) {
        console.log(JSON.stringify(error))
        return 0; 

    }
    
}
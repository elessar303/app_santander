import {apiDarkSky,apiWeatherBit} from  '../config/api'

const lon = -58.3712
const lat = -34.6083

export const getCurrentTemp = async () => {

    return 25
    var options = { params: {lon: lon, lat: lat, lang: 'es'} };

    try {
        const response = await apiWeatherBit.get('current',options);
        return response.data.data[0].temp;
    } catch (error) {
        throw new Error(JSON.stringify(error.response));
    }
    
}

export const getFutureTemp = async (date) => {

    return 21
    
    var options = { params: {lang: 'es', exclude: 'minutely,hourly,daily,alerts,flags', units: 'ca'} };

    try {
        const response = await apiDarkSky.get(`${lat},${lon},${date}`,options);
        return response.data.currently.temperature
    } catch (error) { 
        throw new Error(JSON.stringify(error.response.data));
    }
    
}
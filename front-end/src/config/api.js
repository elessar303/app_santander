const axios = require('axios').default;
const apiKeyWeatherbit = process.env.REACT_APP_API_KEY_WEATHERBIT
const apiKeyDarkSky = process.env.REACT_APP_API_KEY_DARKSKY

export const apiWeatherBit = axios.create({
    baseURL: 'https://weatherbit-v1-mashape.p.rapidapi.com/',
    timeout: 1000,
    headers: { 'x-rapidapi-key': apiKeyWeatherbit,'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com' }
});

export const apiDarkSky = axios.create({
    baseURL: 'https://dark-sky.p.rapidapi.com/',
    timeout: 1000,
    headers: { 'x-rapidapi-key': apiKeyDarkSky,'x-rapidapi-host': 'dark-sky.p.rapidapi.com' }
});

export const apiBackend = axios.create({
    timeout: 1000
});
import axios from 'axios';

const API_KEY = 'f50f82f6807f705a1245966a37eb83c6';
const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    //request is a promise here
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}
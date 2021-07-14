import axios from 'axios';
import { API_URL } from './global';

export default axios.create({
    baseURL: API_URL,
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Credentials": "true"
    },
});
import axios from 'axios';
import { API_URL } from './global';

export default axios.create({
    baseURL: API_URL
});
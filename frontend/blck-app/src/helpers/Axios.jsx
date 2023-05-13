import axios from 'axios'
import { api_url } from './base_url';

const instance = axios.create({
    // baseURL: "http://localhost:5001"
    baseURL: api_url
    // baseURL= "http://0.0.0.0:5001"
    // baseURL: "http://localhost:3005"
    // baseURL: "http://localhost:5001"
});

export default instance;
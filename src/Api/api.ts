import axios from 'axios';

const production  = 'example.com';
const development = 'http://localhost:3000/';
const url = (process.env.NODE_ENV ? production : development);

const api = axios.create({
    baseURL:  url,
})

export default api;
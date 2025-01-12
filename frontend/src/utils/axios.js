import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api', // Django API base URL
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken'); // Correct token name
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;

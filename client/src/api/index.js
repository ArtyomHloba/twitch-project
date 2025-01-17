import axios from 'axios';

const httpClient = axios.create({ baseURL: 'http://localhost:5000/api' });

export const createUser = body => httpClient.post('/users', body);

export const getUsers = () => httpClient.get('/users');

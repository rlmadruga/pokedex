import Axios from 'axios';

const API = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export default API;

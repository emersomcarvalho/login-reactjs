import axios  from "axios";

const api = axios.create({
baseURL: process.env.REACT_APP_API_URL
});

export default api;


//base pronta para o back end
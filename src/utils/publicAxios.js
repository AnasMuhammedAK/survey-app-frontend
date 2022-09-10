import axios from 'axios'

const baseURL = 'https://survey-app-api.onrender.com'

const publicAxios = axios.create({baseURL})

export default publicAxios
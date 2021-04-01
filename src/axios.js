import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY

const instance = axios.create({
    baseURL: `https://v6.exchangerate-api.com/v6/${api_key}/latest/EUR`
})

export default instance;
import axios from 'axios'

const instance = axios.create({
    baseURL: "http://data.fixer.io/api/"
})

export default instance;
import axios from 'axios'

const instance = axios.create({
    baseURL: "https://data.fixer.io/api/"
})

export default instance;
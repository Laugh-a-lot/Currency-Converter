const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    fetchLatest: `latest?access_key=${API_KEY}`
}
export default requests;
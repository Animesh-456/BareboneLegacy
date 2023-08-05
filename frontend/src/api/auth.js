import axios from 'axios';
//Create an instance of Axios with custom configurations
const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000', // Replace with your API base URL
    timeout: 5000, // Set a timeout for API requests (optional)
});

export default axiosInstance;
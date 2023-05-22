import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID M0FAtzbQF7JcofQ1YAwZFH2Tf3fmtP2_VjgjADLSTj0'
    }
});
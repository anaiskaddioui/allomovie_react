import Axios from 'axios';

const ApiMovie = Axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})


const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjY3NTQzMmNlY2Q3ZTM0NzYwZjYxZDNkMjM1OWE0ZCIsInN1YiI6IjVmZGNhZDlmNzc3NmYwMDA0MDMxNzc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSrdEH2SBk1gThrbn_CUF0mU7fjvXuErkX-1AlM3WE0';

ApiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = `Bearer ${token}`;
    return req;
})

export default ApiMovie;







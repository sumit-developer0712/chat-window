import axios from 'axios';
import axiosInterceptor from '../filters/axiosInterceptor';

axios.interceptors.request.use(
  axiosInterceptor.contextPathInterceptor, null
);

module.exports = Object.assign({}, axios);

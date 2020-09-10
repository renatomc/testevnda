import axios from 'axios';

import config from '../config';

const axiosInstance = axios.create({
  timeout: 60000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
});

axiosInstance.interceptors.request.use(async configAxios => {
  try {
    const configCustom = configAxios;
    configCustom.headers.Authorization = `Token token="${config.token}"`;
    return configCustom;
  } catch (error) {
    return error;
  }
});

export default axiosInstance;

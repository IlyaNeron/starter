import axios from 'axios';

import { interceptorConfig } from './interceptor';

export const apiTarget = process.env.REACT_APP_BASE_URL;

const ApiService = axios.create({
  baseURL: apiTarget,
  withCredentials: true,
});

ApiService.interceptors.response.use(interceptorConfig.response, interceptorConfig.error);

export { ApiService };

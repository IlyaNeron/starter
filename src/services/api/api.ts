import axios from 'axios'
import { interceptorConfig } from './interceptor'

export const apiTarget = process.env.REACT_APP_BASE_URL

const apiInstance = axios.create({
  baseURL: apiTarget,
  withCredentials: true,
})

apiInstance.interceptors.response.use(interceptorConfig.response, interceptorConfig.error)

export default apiInstance

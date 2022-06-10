import { apiInstance } from '../api'

export const userApi = {
  checkConnected: async () => {
    const response = await apiInstance.get('/app/check-connected')

    return response.data
  },
}

export const postApi = {
  getAllPosts: async () => {
    const response = await apiInstance.get('https://jsonplaceholder.typicode.com/posts?userId=1')

    return response.data
  },
}

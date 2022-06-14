import { ApiService } from '../api'

export const postApi = {
  getAllPosts: async () => {
    const response = await ApiService.get('https://jsonplaceholder.typicode.com/posts?userId=1')

    return response.data
  },
}

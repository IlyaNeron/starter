import { ApiService } from '../api'

export const userApi = {
  checkConnected: async () => {
    const response = await ApiService.get('/app/check-connected')

    return response.data
  },
}

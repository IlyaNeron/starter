import apiInstance from '../api'

export const userApi = {
  checkConnected: async () => {
    const response = await apiInstance.get('/app/check-connected')

    return response.data
  },
}

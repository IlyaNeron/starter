import apiInstance from '../api'

const userApi = {
  checkConnected: async () => {
    const response = await apiInstance.get('/app/check-connected')

    return response.data
  },
}

export default userApi

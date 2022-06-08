import { AxiosError, AxiosResponse } from 'axios'

export const interceptorConfig = {
  response: (response: AxiosResponse) => {
    return Promise.resolve(response)
  },
  error: (error: AxiosError) => {
    // const status = error.response?.status

    // if (!status) {
    //   history.replace(NO_CONNECTION.path)
    // }

    // if (status === 401 || status === 403) {
    //   store.dispatch(logout())
    // }

    return Promise.reject(error)
  },
}

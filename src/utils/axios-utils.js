import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:4000'
})

export const request = ({ ...options }) => {
  axiosClient.defaults.headers.common.Authorization = `Bearer token`
  const onSuccess = response => response
  const onError = (error) => {
    // handle manually error response

    return error
  }
  return axiosClient(options)
    .then(onSuccess)
    .catch(onError)
}

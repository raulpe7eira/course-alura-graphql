import axios from 'axios'

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_REST_HOST}:${process.env.REACT_APP_API_REST_PORT}`,
  timeout: 10000,
  headers: {
    'content-type': 'application/json',
  }
})

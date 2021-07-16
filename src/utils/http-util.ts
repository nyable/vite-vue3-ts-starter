import axios, { AxiosRequestConfig } from 'axios'
import qs from "qs";

const service = axios.create({
  baseURL: '',
  timeout: 5000
})

service.interceptors.request.use(function (config) {
  return config
}, function (err) {
  return Promise.reject(err)
})

service.interceptors.response.use(function (response) {
  return response
}, function (err) {
  return Promise.reject(err)
})


export function doGet (url: string, params?: any) {
  return service.get(url, { params, paramsSerializer: params => qs.stringify(params) })
}
export function doPost (url: string, params?: any, config?: AxiosRequestConfig) {
  return service.post(url, params, config)
}
export function doPut (url: string, params?: any, config?: AxiosRequestConfig) {
  return service.put(url, params, config)
}
export function doDelete (url: string, params?: any) {
  return service.delete(url, { params, paramsSerializer: params => qs.stringify(params) })
}

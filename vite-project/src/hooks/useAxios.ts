import { useState, useCallback } from 'react'
import axios, { AxiosError } from 'axios'
import type { AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

// Adicionar token ao header de requisições
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Hook para requisições POST
export const usePost = <T, P>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<number | null>(null)

  const postData = useCallback(
    async (postData: P, config?: AxiosRequestConfig) => {
      setData(null)
      setLoading(true)
      setError(null)

      try {
        const response = await axiosInstance({
          url: endpoint,
          method: 'POST',
          data: postData,
          headers: {
            'Content-Type': 'application/json',
            ...config?.headers,
          },
          ...config,
        })
        setData(response.data)
        return response.data
      } catch (e: unknown) {
        const axiosError = e as AxiosError
        const status = axiosError.response?.status || 500
        setError(status)
        throw e
      } finally {
        setLoading(false)
      }
    },
    [endpoint]
  )

  return { data, loading, error, postData }
}

// Hook para requisições GET
export const useGet = <T,>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<number | null>(null)

  const getData = useCallback(async (config?: AxiosRequestConfig) => {
    setData(null)
    setLoading(true)
    setError(null)

    try {
      const response = await axiosInstance({
        url: endpoint,
        method: 'GET',
        ...config,
      })
      setData(response.data)
      return response.data
    } catch (e: unknown) {
      const axiosError = e as AxiosError
      const status = axiosError.response?.status || 500
      setError(status)
      throw e
    } finally {
      setLoading(false)
    }
  }, [endpoint])

  return { data, loading, error, getData }
}

// Hook para requisições DELETE
export const useDelete = <T,>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<number | null>(null)

  const deleteData = useCallback(async (config?: AxiosRequestConfig) => {
    setData(null)
    setLoading(true)
    setError(null)

    try {
      const response = await axiosInstance({
        url: endpoint,
        method: 'DELETE',
        ...config,
      })
      setData(response.data)
      return response.data
    } catch (e: unknown) {
      const axiosError = e as AxiosError
      const status = axiosError.response?.status || 500
      setError(status)
      throw e
    } finally {
      setLoading(false)
    }
  }, [endpoint])

  return { data, loading, error, deleteData }
}

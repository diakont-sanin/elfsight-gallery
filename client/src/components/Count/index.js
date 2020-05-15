import React, { useCallback, useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import {Loader} from '../Loader'
import { useMessage } from '../../hooks/message.hook'
export const Count = ({ id }) => {

  const [count, setCount] = useState()
  const { error, request, clearError, loading } = useHttp()
  const message = useMessage()

  const getCount = useCallback(async () => {
    try {
      const fetched = await request(`/api/photos/${id}`, 'GET')
      setCount(fetched)
    } catch (e) {}
  }, [request,id])

  useEffect(() => {
    getCount()
  }, [getCount])

  useEffect(() => {
    if (error) {
      console.log(error)
      message(error)
      clearError()
    }
  }, [error, message, clearError])
  
  if(loading) return <Loader />
  return <>{count}</>
}

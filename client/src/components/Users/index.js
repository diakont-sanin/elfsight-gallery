import React, { useCallback, useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import './index.css'

import { useHistory } from 'react-router-dom'
import { useMessage } from '../../hooks/message.hook'

export const Users = () => {
  const history = useHistory()
  const { error, request, clearError, loading } = useHttp()
  const [listUser, setListUser] = useState([])
  const message = useMessage()

  const getListUsers = useCallback(async () => {
    try {
      const fetched = await request(`/api/users/`, 'GET')
      setListUser(fetched)
    } catch (e) {}
  }, [request])

  useEffect(() => {
    getListUsers()
  }, [getListUsers])

  useEffect(() => {
    if (error) {
      console.log(error)
      message(error)
      clearError()
    }
  }, [error, message, clearError])

  const handleClick = (id) => {
    history.push(`/users/${id}`)
  }
  if (loading) return <div>Loading...</div>
  return (
    <div>
      {listUser.map((item) => (
        <div key={item.id} className="center">
          <div className="property-card">
            <div className="property-description">
              <h4>{item.name}</h4>
              <p>{item.email}</p>
              <p>{item.phone}</p>
              <p>{item.website}</p>
              <div className="box-1">
                <div
                  className="btn btn-one"
                  onClick={() => {
                    handleClick(item.id)
                  }}
                >
                  <span>Портфолио</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

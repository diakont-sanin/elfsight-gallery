import React, { useCallback, useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import './index.css'
import { Count } from '../Count'
import { useParams, useHistory } from 'react-router-dom'
import { useMessage } from '../../hooks/message.hook'

export const UserAlbum = () => {
  const [listAlbum, setListAlbum] = useState([])
  const { error, request, clearError, loading } = useHttp()
  const message = useMessage()
  const user = useParams().id
  const history = useHistory()
  const getUserAlbum = useCallback(async () => {
    try {
      const fetched = await request(`/api/users/${user}`, 'GET')
      setListAlbum(fetched)
    } catch (e) {}
  }, [request, user])

  useEffect(() => {
    getUserAlbum()
  }, [getUserAlbum])

  useEffect(() => {
    if (error) {
      console.log(error)
      message(error)
      clearError()
    }
  }, [error, message, clearError])

  const handleClick = (user, id) => {
    history.push(`/users/${user}/album/${id}`)
  }
  if (loading) return <div>Loading...</div>
  return (
    <div>
      {listAlbum.map((item) => {
        return (
          <div key={item.id} className="container center">
            <div className="card">
              <h4>{item.title}</h4>
              <hr />
              <div style={{ marginTop: '10px' }}>
                Количество фото: {<Count id={item.id} />}
              </div>
              <div
                className="btn btn-two"
                onClick={() => handleClick(user, item.id)}
              >
                Просмотр альбома
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

import React, { useState, useEffect, useCallback } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useParams } from 'react-router-dom'
import {Modal} from './Modal'
import { useMessage } from '../../hooks/message.hook'

export const ListAlbum = () => {
  const [listAlbum, setListAlbum] = useState([])
  const { error, request, clearError, loading } = useHttp()
  const [show, setShow] = useState(false)
  const [idModal, setIdModal] = useState()
  const message = useMessage()
  const id = useParams().id


  const getPhotos = useCallback(async () => {
    try {
      const fetched = await request(`/api/detail/${id}`, 'GET')
      setListAlbum(fetched)
    } catch (e) {}
  }, [request, id])

  useEffect(() => {
    getPhotos()
  }, [getPhotos])

  useEffect(() => {
    if (error) {
      console.log(error)
      message(error)
      clearError()
    }
  }, [error, message, clearError])

  const showModal = ()=>{
    setShow(!show)
  }

  if (loading) return <div>Loading...</div>
  return (
    <div>
      <div>
      <Modal onClose={showModal} show={show} data={listAlbum} idModal={idModal} />
      </div> 
      {listAlbum.map((item) => {
        return (
          <div key={item.id} className="container center">
            <img
              src={item.thumbnailUrl}
              alt={item.title}
              onClick={(e) => {
                showModal(e)
                setIdModal(item.id)
              }}
              className="card"
            />
          </div>
        )
      })}
    </div>
  )
}

import React, { useState, useEffect, useCallback } from 'react'
import './index.css'

export const Modal = ({ onClose, show, idModal, data }) => {
  const [currentPhoto, setCurrentPhoto] = useState()

  const nextPhoto = (id) => {
    const maxId = data.length + data[0].id - 1
    if (id === maxId) return
    const next = data.filter((item) => item.id === id + 1)
    setCurrentPhoto(next[0])
  }

  const prevPhoto = (id) => {
    const minId = data[0].id
    if (id === minId) return
    const prev = data.filter((item) => item.id === id - 1)
    setCurrentPhoto(prev[0])
  }

  const getPhoto = useCallback(
    (idModal) => {
      const photo = data.filter((item) => item.id === idModal)
      setCurrentPhoto(photo[0])
    },
    [data]
  )

  useEffect(() => {
    getPhoto(idModal)
    // eslint-disable-next-line
  }, [idModal, data])

  if (!show) {
    return null
  }

  return (
    <div
      className="modal"
      id="modal"
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') prevPhoto(currentPhoto.id)
        else if (e.key === 'ArrowRight') nextPhoto(currentPhoto.id)
      }}
    >
      <h4>{currentPhoto && currentPhoto.title}</h4>
      <div className="content">
        <img
          className="img"
          src={currentPhoto && currentPhoto.url}
          alt={currentPhoto && currentPhoto.title}
        />
        <div>
          <button
            className="toggle-button"
            onClick={() => prevPhoto(currentPhoto.id)}
            autoFocus={true}
          >
            ←	
          </button>
          <button
            className="toggle-button"
            onClick={() => nextPhoto(currentPhoto.id)}
          >
            	→
          </button>
        </div>
      </div>
      <div className="actions">
        <button className="toggle-button" onClick={onClose}>
          close
        </button>
      </div>
    </div>
  )
}

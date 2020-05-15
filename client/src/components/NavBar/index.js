import React from 'react'
import './index.css'
import { Link, useLocation, useHistory } from 'react-router-dom'
export const NavBar = () => {
  const path = useLocation().pathname.split('/').length
  const current = useLocation().pathname
  const historyBack = useHistory().goBack

  const usersList = (
    <div>
      <div className="header">
        <Link to={current} className="logo">
          Авторы фотогалереи
        </Link>
      </div>
    </div>
  )
  const albumList = (
    <div>
      <div className="header">
        <Link to={current} className="logo">
          Альбомы автора
        </Link>
        <div className="header-right">
          <Link to={'/users'} className="active">
            Назад
          </Link>
        </div>
      </div>
    </div>
  )
  const photoList = (
    <div>
      <div className="header">
        <Link to={current} className="logo">
          Просмотр альбома
        </Link>
        <div className="header-right">
          <Link onClick={historyBack} to={'#'} className="active">
            Назад
          </Link>
          <Link to={'/users'} className="active">
            Главная
          </Link>
        </div>
      </div>
    </div>
  )
  switch (path) {
    case 2:
      return usersList
    case 3:
      return albumList
    case 5:
      return photoList
    default:
      return usersList
  }
}

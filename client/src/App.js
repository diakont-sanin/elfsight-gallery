import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {useRoutes} from './routes'
import { NavBar } from './components/NavBar'


const App = () => {
  const routes = useRoutes()
  return (
      <Router>
        <NavBar />
        <div>{routes}</div>
      </Router>
  )
}

export default App

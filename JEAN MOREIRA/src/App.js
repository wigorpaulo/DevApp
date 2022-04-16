import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Componentes/Style.css'
import Login from './Componentes/Login/Login'
import Conta from './Componentes/Principal/Conta'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/conta" element={<Conta />} />
        </Routes>
      </Router>
    )
  }
}

export default App

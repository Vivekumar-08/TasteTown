import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import Home from './component/home'
import Menu from './component/menu'
import Offer from './component/Offer'

function App() {
  
  return (
    <>
      <Header />
      <Home />
      <Menu />
      <Offer />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import Home from './component/home'
import Menu from './component/menu'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Menu />
    </>
  )
}

export default App

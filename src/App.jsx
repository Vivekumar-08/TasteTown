import './App.css'
import Header from './component/header'
import Home from './component/home'
import Food from './component/food'
import Offer from './component/Offer'
import SignIn from './component/signin'
import Login from './component/login'
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/food' element={<Food />} />
        <Route path='/offer' element={<Offer />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
function App() {


  return (
    <>
    <Navbar/>
    
    <Manager/>
   
   <Footer/>
    </>
  )
}

export default App

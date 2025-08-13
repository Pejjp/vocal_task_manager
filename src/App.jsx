import { useState } from 'react'
import './styles/App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <main className='main-content'>
    {/* display the home page */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
   </main>
  )
}

export default App


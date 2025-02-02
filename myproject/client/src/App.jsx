import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './views/Main'
import { Routes, Route } from 'react-router-dom';
import Detail from './views/Detail'
import Update from './views/Update'
function App() {


  return (
    <>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Detail />} path="/people/:id" />
        <Route element={<Update/>} path="/people/:id/edit"/>
      </Routes>
    </>
  )
}

export default App

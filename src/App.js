import React from 'react'
import Main from './Components/Home Com/Main'
import {  Route, Routes } from 'react-router-dom'
import Movie from './Components/Home Com/Movie/Movie'
const App = () => {
  return (
    <div>
        <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/Movie' element={<Movie/>}/>
      </Routes> 
    </div>
  )
}

export default App


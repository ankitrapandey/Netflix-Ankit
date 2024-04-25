import React from 'react'
import Main from './Components/Home Com/Main'
import {  Route, Routes } from 'react-router-dom'

import Blog from './Components/Home Com/Blog'
import Bitz from './Components/Home Com/Toggle/Bitz'
import Normaltask from './Components/Home Com/Toggle/Normaltask'
import Toggle from './Components/Home Com/Toggle/Toggle'
import Movie from './Components/Home Com/Movie/Movie'
import Blog1 from './Components/Home Com/Blog1'
import Search from './Components/Home Com/Search/Search'
import Form from './Components/Home Com/Form'


const App = () => {
  return (
    <div>
        <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/Movie' element={<Movie/>}/>
        {/* <Route exact path='/' element={<Blog/>}/>
        <Route exact path='/Blogsgallery/:id' element={<Blog1/>}/>
        <Route exact path='/backprevioussection' element={<Blog/>}/> */}
      </Routes> 
       {/* <Blog/>  */}
       {/* <Movie/> */}
{/* <Bitz/>
<Normaltask/> */}
{/* <Toggle/> */}
{/* <Search/> */}
{/* <Form/> */}
    </div>
  )
}

export default App


import React from 'react'
import Home from "./Home"
import SingleMovie from "./SingleMovie"
import Error from "./Error"
import "./App.css";


import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='movies/:id' element={<SingleMovie/>}/>//Here :id takes dynamic id of movies 
        <Route path='*' element={<Error/>}/>//else any wrong url will go to error page

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
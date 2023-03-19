import React, { useContext } from 'react'
import { AppContext, useGlobalContext } from './context';
import Search from "./Search";
import Movies from "./Movies"

const Home = () => {

  //const name=useContext(AppContext);
  // const name=useGlobalContext();

  return (
    // <div>Home  {name}</div>

    <>
    <Search/>
    <Movies/>
    </>
  )
}

export default Home
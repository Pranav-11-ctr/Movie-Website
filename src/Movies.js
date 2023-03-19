import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context'
import "./App.css";

const Movies = () => {

  const {movies,isLoading}=useGlobalContext();



  if(isLoading)
  {
    return (
      <section className=''>
      <div className='loading'>Loading...</div>

      </section>
    )
  }





// console.log("before data")
  console.log(movies);
  // console.log("after data")

  return (
    <>
    <section className='movie-page'>
    <div className='container grid grid-4-col'>
    {movies.map((currMovie)=>
      {
        const{imdbID,Title,Poster}=currMovie;
        const movieName=Title.substring(0,15);
        return (
          <NavLink to={`movies/${imdbID}`} key={imdbID}>
          <div className='card'>
            <div className='card-info'>
              <h2>{movieName.length>=15?`${movieName}...`:movieName}</h2>
              <img src={Poster} alt={imdbID}/>
            </div>
          </div>

          </NavLink>
        )
        
      })}

      
    </div>


    </section>








      {/* {movies.map((currElem)=>
      {
        {/* return <div>
          <h2>{currElem.Title}</h2>
        </div> */}
      {/* })} } */}
    </>
  )
}

export default Movies
import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom'
import {API_URL} from "./context";
import { NavLink } from 'react-router-dom';

const SingleMovie = () => {

  const {id}=useParams();//Name of id is match with route :id
 // console.log(id)


  const[isLoading,setIsLoading]=useState(true);
  const [movies,setMovies] =useState("");

  


  const getMovies =async(url)=>
  {
    setIsLoading(true);
      try{
          const res= await fetch(url);
          const data= await res.json();
          console.log(data);


          if(data.Response=== "True")
          {
              setMovies(data);
              //console.log(movies)
              setIsLoading(false);
          }
          // else{

          //     setIsError(
          //         {
          //         show:true,
          //         msg:data.error
          //     }
          //     )

          // }




      }catch(error)
      {
          console.log(error)
      }
  }


  //here use useEffect to fetch API_URL only one time.
  useEffect(()=>
  {
      let timeOut=setTimeout(()=>
      {
          getMovies(`${API_URL}&i=${id}`);
      },800);

      return ()=>clearTimeout(timeOut); 
      
      // getMovies(`${API_URL}&s=${query}`); ye jitna baar name me change ho rha hai utna baar response bhej rha hai
  },[id]);


  if(isLoading)
  {
    return (
      <section className='movie-section'>
      <div className='loading'>Loading...</div>

      </section>
    )
  }

  return (
    
      <section className='movie-section'>
        <div className='movie-card'>
        <figure>
          <img src={movies.Poster} alt=""/>
        </figure>

        <div className="card-content">
          <p className="title">{movies.Title}</p>
          <p className=""></p>
          <p className="card-text">{movies.Released}</p>
          <p className="card-text">{movies.Genre}</p>
          <p className="card-text">{movies.imdbRating} / 10</p>
          <p className="card-text">{movies.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>

        </div>
      </section>
    
  )
}

export default SingleMovie
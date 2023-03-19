import React, { useContext, useEffect, useState } from "react";

//context <API></>
//useContext hooks

// context is like warehouse
// Provider( is like delivery boy)

// consumer /(is replace with useContext())

//export const API_URL=`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;
export const API_URL=`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;



const AppContext=React.createContext();

//we need to create a provider function
const AppProvider=({children})=>
{


    const [movies,setMovies] =useState([]);
    const[isLoading,setIsLoading]=useState(true);
    const[isError,setIsError]=useState({show:"false",msg:""});
    const[query,setQuery]=useState("titanic");


    const getMovies =async(url)=>
    {
        setIsLoading(true);
        try{
            const res= await fetch(url);
            const data= await res.json();
            console.log(data);


            if(data.Response=== "True")
            {
                setMovies(data.Search);
                //console.log(movies)
                setIsError(
                    {
                    show:false,
                    msg:""
                }
                )
                setIsLoading(false);
            }
            else{

                setIsError(
                    {
                    show:true,
                    msg:data.Error
                }
                )

            }




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
            getMovies(`${API_URL}&s=${query}`);
        },800);

        return ()=>clearTimeout(timeOut); 




        
        // getMovies(`${API_URL}&s=${query}`); ye jitna baar name me change ho rha hai utna baar response bhej rha hai
    },[query]);




    return <AppContext.Provider value={{isError,isLoading,movies,query,setQuery}}>{children}</AppContext.Provider>
};


const useGlobalContext=()=>
{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useGlobalContext};
import {
    
    LOAD_MOVIES,LOAD_SINGLE_MOVIE
} from '../constant'
import { MovieContract } from '../Contracts/moviesContract'

 

    
    export const getAllSavedDesign = () => async (dispatch:any)=>
    {
     fetch('https://api.tvmaze.com/shows')
    .then(response =>
        response.json())
        .then(
          async(movies)=>
          {
           
            await dispatch({ type: LOAD_MOVIES, movies })
          }
        )
               
    }

    export const getSingleDetail =(id:any)=>async (dispatch:any)=>{
      fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response=>
        response.json()).then(
          async(SingleMovie : any)=>
          {
            await dispatch ({type:LOAD_SINGLE_MOVIE, SingleMovie })
          }
        )
    }




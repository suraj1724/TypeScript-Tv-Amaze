

import {LOAD_MOVIES,LOAD_SINGLE_MOVIE} from '../constant'


const initialState = 
{
    movies:[],
    SingleMovie:[]
   
};

  export default function shows(state = initialState, action:any) 
  {
    switch (action.type) {
        case LOAD_MOVIES:{
            return {
                ...state,
                movies: action.movies
                
            }
        
        }
        case LOAD_SINGLE_MOVIE:{
            return{
                ...state,
                SingleMovie:action.SingleMovie
            }
        }

        default: {
            return state;
        }
    }
 }



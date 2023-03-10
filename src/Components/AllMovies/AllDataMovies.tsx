import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getAllSavedDesign} from '../../Actions/Show';

// import { MovieContract } from "../../Contracts/moviesContract"
// import { Fetching } from "../../hooks/fetchingData1";
export function ShowsData() {

    const dispatch = useDispatch()
    const shows1 = useSelector((state:any) => state.shows.movies)
    console.log("hhdhdhhd",shows1)
    // const [shows ,setShows]= useState<MovieContract[]>([]);
    // const GateMOvies = Fetching("https://api.tvmaze.com/shows")
    
    useEffect(()=>{

        dispatch( getAllSavedDesign())
    },[])

    return (
        <>
            <div className="d-flex container-fluid mt-4">
                <div className="col-3">
                    
                </div>
                <div className="col-9 d-flex flex-wrap m-3">
                    {
                        shows1?.map((show: any, index: number) =>
                            <div className="card m-2 p-2" style={{ width: "13rem" }}>
                               <Link to={'/details/' + show.id}> <img src={show.image.medium} className="card-img-top" id={show.id} alt="..." /></Link>
                                <div className="card-body">
                                    <h5 className="card-title">{show.name}</h5>
                                    <p className="card-text">{show.genres}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{show.language}</li>
                                   
                                </ul>
                                {/* <div className="card-body">
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div> */}
                            </div>

                        )
                    }

                </div>


            </div>
        </>
    )
} 
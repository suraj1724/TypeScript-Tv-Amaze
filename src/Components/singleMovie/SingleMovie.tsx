import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieContract } from "../../Contracts/moviesContract";
import '../WebChannel/Details.css'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getSingleDetail } from "../../Actions/Show";

export function MovieDetails(props:any) {
    const params = useParams();
    const [Shows, setShows] = useState<MovieContract>();
    axios({
        method: 'get',
        url: `https://api.tvmaze.com/shows/${params.id}`,
    })
        .then(response => {
            // alert(response.data)
            setShows(response.data)
        
            

        });
        const dispatch = useDispatch()
        const Single_Show = useSelector((state:any) => state.shows.SingleMovie)
        console.log("hhdhdhhd",Single_Show)
        useEffect(()=>{
            dispatch(getSingleDetail(params.id))
        })
        return(
            <>
        
        <div>
                <div id="back">
                <div className="d-flex justify-content-evenly container-fluid " >
                    <div>
                        <img src={Single_Show?.image?.medium
                        } height="150" width={"150px"} className="card-img-top" />
                        <h3>So, pick me. Choose me, Love me</h3>
                    </div>
                    <div id="poster">
                        
                    </div>
                    


                </div>
                </div>
                <div>
                    <div>
                        <h4> Show Info</h4>
                    </div>

                </div>
                <div className="d-flex flex-wrap justify-content-around" >
                    <div>
                        <table className="table">

                            <tbody>
                                <tr>
                                    <th scope="row">Show Name</th>
                                    <td>{Single_Show?.name}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Language</th>
                                    <td>{Single_Show?.langauge}</td>

                                </tr>
                                <tr>
                                    <th scope="row">genres</th>
                                    <td >{Single_Show?.genres}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Status</th>
                                    <td >{Single_Show?.status}</td>

                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <div>
                        <div>
                            <table className="table">

                                <tbody>
                                    <tr>
                                        <th scope="row">premiered</th>
                                        <td>{Single_Show?.premiered}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">rating</th>
                                        <td>{Single_Show?.rating?.average}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">timezone</th>
                                        <td>{Single_Show?.network?.country?.timezone}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Status</th>
                                        <td>{Single_Show?.status}</td>

                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

                </>
        )
    
}
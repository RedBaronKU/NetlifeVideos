import React,{useState,useEffect} from 'react'
import axios from './axios.js'
import requests from './request.js'
import './banner.css'
function Banner() {

    const [movie,setMovie]=useState([]);
    useEffect(() => {
        async function fetchData(){
            const response=await axios.get(requests.fetchNetflixOriginals);
            console.log(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]);
            setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]);
        }
        fetchData();
    }, [])
    return (
        <header className="banner"
        style={{
            backgroundImage:`url("https://images.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize:"cover",
            backgroundPosition:"center center",
        }}>
        <div className="bannerContent">
            <h1 className="bannerTitle">{movie?.title||movie?.name||movie?.original_name}</h1>
            <p className="bannerDescription">{movie?.overview}</p>
            <div> 
                <button className="button">More Like This</button>
                <button className="button">Play This</button>
            </div>
        </div>
        <div className="fade"></div>
        </header>
    )
}

export default Banner

import React,{useState,useEffect} from 'react';
import axios from './axios.js';
import './Row.css';

const baseURL="https://images.tmdb.org/t/p/original/";

function Row({title,fetchURL,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request=await axios.get(fetchURL);
            setMovies(request.data.results);
        }
        fetchData();
    }, [fetchURL]);
    return (
        <div className="Row">
            <h2>{title}</h2>
            <div className="rowPosters">
                {
                    movies.map(movie => (
                        <img 
                         key={movie.id}
                         className={`rowPoster ${isLargeRow && "rowPosterLarge"}`} 
                         src={`${baseURL}${movie.poster_path}`}
                         alt={`${movie.name}`}>
                        </img>
                ))}
            </div>
        </div>
    );
}

export default Row;

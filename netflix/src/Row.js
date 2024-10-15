import React, { useState, useEffect } from 'react'; 
import axios from './axios';
import "./Row.css"

function Row({title, fetchURL, isLargeRow = false}){
    const [movies, setMovies] = useState([]); 
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();  
    }, [fetchURL]);    
    return(
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map(movie => (movie.poster_path || movie.backdrop_path ? (
                <img 
                className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                key={movie.id} 
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name || movie.title || movie.original_name}
             />
             
    ) : null
))}

            </div>
        </div>
        );
    
}

export default Row;
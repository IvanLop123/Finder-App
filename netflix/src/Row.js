import React, { useState, useEffect } from 'react'; 
import axios from './axios';
import './Row.css';

function Row({ title, fetchURL, isLargeRow = false }) {
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

  // Function to handle the click and get the watch provider link
  const handleMovieClick = async (movieId) => {
    try {
      const providerRequest = await axios.get(`/movie/${movieId}/watch/providers?api_key=3a1c097371431c8b735e1ea0ab3f3c3d`);
      const providers = providerRequest.data.results;

      if (providers.US && providers.US.link) {
        // Redirect to the US provider if available
        window.location.href = providers.US.link;
      } else {
        alert("Streaming service not available for this movie.");
      }
    } catch (error) {
      console.error("Error fetching watch providers", error);
    }
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) => 
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img 
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
                onClick={() => handleMovieClick(movie.id)} // Add onClick handler
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;

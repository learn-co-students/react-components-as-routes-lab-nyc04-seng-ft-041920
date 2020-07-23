import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => {
    return(
      movies.map((movie, index) => (
        <div key={index}>
          <p>{movie.title}</p>
          <p>{movie.time}</p>
          <ul>
            {movie.genres.map((genre, index)=> (
                <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
        ))
    )
  }

  // console.log(renderMovies());

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;

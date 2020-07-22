import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => <div>
          <p>{movie.title}</p>
          <p>{movie.time}</p>
        <ul>{movie.genres.map(g => <li>{g}</li>)}</ul>
        </div>)}
    </div>
  );
};

export default Movies;

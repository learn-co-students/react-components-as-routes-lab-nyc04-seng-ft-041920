import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let moviesRender = movies.map((movie, index) =>
    <div className="movie" key={index}>
      <h2>Title: {movie.title}</h2>
      <h3>Time: {movie.time}</h3>
      <p>Genres:</p>
      <ul>
        {movie.genres.map((genre, index) => <li>{genre}</li>)}
      </ul>
    </div>
  )
  return (
    <div>
        <h1>Movies Page</h1>
        {moviesRender}
    </div>
  );
};

export default Movies;

import React from 'react';
import { movies } from '../data';
import { move } from 'superagent';

const Movies = () => {

  const renderMovies = () => (
    movies.map((movie, index) => {
      return (<div key={index}>
        <h3>{movie.title}</h3>
        <p>How long: {movie.time} minutes</p>
        <p>Genres: {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}</p>
      </div>)
    })
  )

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;


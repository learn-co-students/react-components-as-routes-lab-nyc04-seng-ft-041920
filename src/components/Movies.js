import React from 'react';
import { movies } from '../data';
import { move } from 'superagent';

const Movies = () => {

  const renderMovies = () => (
    movies.map((movie, index) => {
      return (<div key={index}>
        <h3>{movie.title}</h3>
        <h6>length: {movie.time} minutes</h6>
      <h3>Genres: {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}</h3>
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

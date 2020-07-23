import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let movieRender = () => {
    return movies.map(mov =>(
      <div>
        <h2>{mov.title}</h2>
        <p>Time: {mov.time} min</p>
        <ul>generes: {mov.genres.map(gen => <li>{gen}</li>)} </ul>
      </div>
    ))
  }
  return (
    <div>
    <h1>Movies Page</h1>
   {movieRender()}
    </div>
  );
};

export default Movies;

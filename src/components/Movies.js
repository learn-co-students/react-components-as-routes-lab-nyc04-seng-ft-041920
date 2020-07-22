import React from 'react';
import { movies } from '../data';

// This component should render the text Movies Page in an <h1>, and make a 
// new <div> for each movie. The <div> should contain the movie's title, 
// time and a <ul> with a list of its genres.

// title: 'Trolls',
// time: 92,
// genres: ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy']

const Movies = () => {

  const renderMovies = () => {
    return movies.map(movie => 
      <div>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <p>Movies: </p>
        <ul>
          {movie.genres.map(genre => (
            <li>{genre}</li>
          ))}
        </ul>
      </div>
      )
  }
  return (
    <div>
      <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;

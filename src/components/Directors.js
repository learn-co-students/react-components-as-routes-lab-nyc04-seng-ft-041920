import React from 'react';
import { directors, movies } from '../data';

const Directors = () => {

  const renderDirectors = () => {
    return(
      directors.map((director, index) => (
        <div key={index}>
          <p>{director.name}</p>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))
    )
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors

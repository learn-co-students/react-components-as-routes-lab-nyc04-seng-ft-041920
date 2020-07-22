import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirectors = () => (
    directors.map((director, index) => {
      return (<div key={index}>
        <h3>{director.name}</h3>
      <p>Movies: {director.movies.map((movie, index) => <li key={index}>{movie}</li>)}</p>
      </div>)
    })
  )

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
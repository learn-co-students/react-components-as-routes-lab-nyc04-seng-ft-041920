import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorsRender = actors.map((actor, index) =>
    <div className='actor' key={index}>
      <h2>Name: {actor.name}</h2>
      <p>Movies</p>
      <ul>
        {actor.movies.map((movie, index) => <li>{movie}</li>)}
      </ul>
    </div>
  )
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsRender}
    </div>
  );
};

export default Actors;

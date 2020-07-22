import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => <div key={actor.name}>
        <h1>{actor.name}</h1>
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>)}
    </div>
  );
};

export default Actors;

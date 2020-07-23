import React from 'react';
import { actors } from '../data';

const Actors = () => {

  let renderActors = () => {
    return actors.map(actor =>(
      <div>
        <h1>Actor: {actor.name}</h1>
        <ul>Movies: {actor.movies.map(movie => <li>{movie}</li>)}</ul>
      </div>
    ))
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;

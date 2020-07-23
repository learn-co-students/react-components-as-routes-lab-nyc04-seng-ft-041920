import React from 'react';
import { actors } from '../data';
import { render } from 'enzyme';

const Actors = () => {

  // console.log(actors)
  const renderActors = () => {
    return(
      actors.map((actor, index) => (
        <div key={index} className="actor">
          <p>{actor.name}</p>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))
    )
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;

import React from 'react';
import { actors } from '../data';

function listmovies(movies) {
  return ( movies.map((movie)=> {
  return ( <ul>{movie}</ul>
  )
  })
  )
}


const renderactors = actors.map((actor) => {
  return ( <div>
    <p>{actor.name}</p>
    
    {listmovies(actor.movies)}
  </div>
  )
}
)


const Actors = () => {
  return (
    <div>
        <h1>Actors Page</h1>
        {renderactors}
    </div>
  );
};

export default Actors;

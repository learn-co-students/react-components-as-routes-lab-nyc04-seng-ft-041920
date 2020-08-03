import React from 'react';
import { directors } from '../data';

function listMovies(movies) {
  return ( movies.map((movie)=> {
  return ( <ul>{movie}</ul>
  )
  })
  )
}


const renderdirectors = directors.map((director) => {
  return ( <div>
    <p>{director.name}</p>
    {listMovies(director.movies)}
  </div>
  )
}
)



const Directors = () => {
  return (
    <div>
        <h1>Directors Page</h1>
        {renderdirectors}
    </div>
  );
}

export default Directors






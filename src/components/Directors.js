import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let directorsRender = directors.map((dir, idx) =>
    <div className="director" key={idx}>
      <h2>Title: {dir.name}</h2>
      <p>Movies:</p>
      <ul>
        {dir.movies.map((movie, idx) => <li>{movie}</li>)}
      </ul>
    </div>
  )
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsRender}
    </div>
  );
}

export default Directors

import React from 'react';
import { movies } from '../data';


function listGenres(genres) {
  return ( genres.map((genre)=> {
  return ( <ul>{genre}</ul>
  )
  })
  )
}


const rendermovies = movies.map((movie) => {
  return ( <div>
    <p>{movie.title}</p>
    <p>{movie.time} minutes</p>
    {listGenres(movie.genres)}
  </div>
  )
}
)
console.log(rendermovies)

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {rendermovies}
    </div>
  );
};

export default Movies;

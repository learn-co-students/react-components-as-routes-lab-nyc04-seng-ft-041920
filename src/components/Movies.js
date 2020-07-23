import React from "react";
import { movies } from "../data";

const Movies = () => {
  const renderMovies = () => {
    return movies.map((movie) => {
      return (
        <div>
          <h2>{movie.title}</h2>
          <h2>{movie.time}</h2>
          <ul>{renderMovieGenres(movie.genres)}</ul>
        </div>
      );
    });
  };

  const renderMovieGenres = (genres) => {
    return genres.map((movieGenre) => <ul>{movieGenre}</ul>);
  };

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;

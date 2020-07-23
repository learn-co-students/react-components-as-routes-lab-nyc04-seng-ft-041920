import React from "react";
import { directors } from "../data";

const Directors = () => {
  const renderDirectors = () => {
    return directors.map((director) => {
      return (
        <div>
          <h2>{director.name}</h2>
          <ul>{renderDirectorsMovies(director.movies)}</ul>
        </div>
      );
    });
  };

  const renderDirectorsMovies = (movies) => {
    return movies.map((movie) => <li>{movie}</li>);
  };

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
};

export default Directors;

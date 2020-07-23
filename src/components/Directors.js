import React from 'react';
import { directors } from '../data';
import { render } from 'enzyme';

const Directors = () => {

  let renderDriectors = () => {
    return directors.map(dirctor => (
      <div>
      <h3>Name: {dirctor.name}</h3>
      <ul>Movies: {dirctor.movies.map(mov => <li>{mov}</li>)}</ul>
      </div>
    ))
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDriectors()}
    </div>
  );
}

export default Directors

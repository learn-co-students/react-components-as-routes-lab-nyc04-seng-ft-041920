import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '200px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'orange',
  textDecoration: 'none',
  color: 'gray',
}



const NavBar = () => {
  return (
    <div className="navbar">
        <NavLink
          to="/"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'yellow'
          }}
        >Home</NavLink>
        <NavLink
          to="/movies"
          exact
          style={link}
          activeStyle={{
            background: 'yellow'
          }}
        >Movies</NavLink>
        <NavLink
          to="/directors"
          exact
          style={link}
          activeStyle={{
            background: 'yellow'
          }}
        >Directors</NavLink>
        <NavLink
          to="/actors"
          exact
          style={link}
          activeStyle={{
            background: 'yellow'
          }}
        >Actors</NavLink>

      </div>
  );
};

export default NavBar;

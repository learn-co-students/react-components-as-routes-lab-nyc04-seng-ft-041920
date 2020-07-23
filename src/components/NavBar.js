import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  // <Route path={'/Home'} component={Home}/>
  // <Route path={'/Actors'} component={Actors}/>
  // <Route path={'/Directors'} component={Directors}/>
  // <Route path={'/Movies'} component={Movies}/>

  return (
    <div className={"navbar"}>
      {/* Home */}
      <NavLink
        to="/"
        exact
      >Home</NavLink>

      {/* Actors */}
      <NavLink
        to="/actors"
        exact
      >Actors</NavLink>

      {/* Directors */}
      <NavLink
        to="/directors"
        exact
      >Directors</NavLink>

      {/* Movies */}
      <NavLink
        to="/movies"
        exact
      >Movies</NavLink>
    </div>
  );
};

export default NavBar;

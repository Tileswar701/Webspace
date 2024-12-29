import React from "react";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <>
        <nav className="navbar flex justify-between items-center">
            <div className="brand-logo w-[2em] m-2">
                <img src="./src/assets/UI/logos/logoForNav/logo.png" alt="logo" />
            </div>
            <div className="nav-links w-full flex justify-around">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="Workspace" className="nav-link">Workspace</NavLink>
                <NavLink to="Dashboard" className="nav-link">Dashboard</NavLink>
                <NavLink to="About" className="nav-link">About</NavLink>
            </div>
            <div className="nav-buttons">
                <button className="w-full text-nowrap">user</button>
            </div>
        </nav>
    </>
  );
};

export default Navbar;

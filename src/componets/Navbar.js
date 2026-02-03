import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <ul
        className="nav nav-tabs navbar-dark d-flex "
        style={{ justifyContent: "end" }}
      >
        <li className="nav-item">
          <Link to="/rickandmorty" className="nav-link ">
            Rick and Morty
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/libreta" className="nav-link">
            Libreta
          </Link>
        </li>
      </ul>
    </div>
  );
};

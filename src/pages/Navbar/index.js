import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar  navbar-expand-lg">
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/exercises" className="nav-link">
                  Exercises
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Exercise Log
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/user" className="nav-link">
                  Create User
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <footer>2020 @PABLO GOMES</footer>
      </>
    );
  }
}

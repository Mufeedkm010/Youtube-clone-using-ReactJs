import React from "react";
import { FaSearch, FaBars, FaBell, FaUserCircle, FaTh } from 'react-icons/fa';
import "./Nav.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3">
      <div className="d-flex align-items-center">
        <FaBars className="mr-3" size={22} />
        <img
          src="https://www.youtube.com/img/desktop/yt_1200.png"
          alt="YouTube Logo"
          height="30"
        />
      </div>

      <div className="input-group mx-auto w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <FaTh className="mx-3" size={22} />
        <FaBell className="mx-3" size={22} />
        <FaUserCircle className="mx-3" size={30} />
      </div>
    </nav>
  );
};

export default Navbar;

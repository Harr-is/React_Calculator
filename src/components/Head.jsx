import React from "react";
import { Link, Outlet } from "react-router-dom";
const Head = () => {
  return (
    <>
      <nav className="header">
        <ul>
          <li>
            <Link to="/" className="text">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Calculator" className="text">
              Calculator
            </Link>
          </li>
          <li>
            <Link to="/Quote" className="text">
              Quotes
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Head;

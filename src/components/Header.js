import React from "react";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";

const headerStyles = {
    backgroundColor: "#f8f9fa",
    padding: "1rem",
    color: 'white'
}
const linkStyles = {
  textDecoration: "none",
  color: "black",
  fontSize: "1.2rem",
};
const navStyles = {
  display: "flex",
  gap: '1rem',
  listStyle: "none",
  margin: 0,
  padding: 0,
};
const Header = () => {
  const user = useSelector((state) => state.user);

  return (
    <header style={headerStyles}>
      <nav>
        <ul style={navStyles}>
          <li>
            <Link to="/aimhub" style={linkStyles}>AimHub</Link>
          </li>
          <li>
            <Link to="/ft" style={linkStyles}>FT</Link>
          </li>
          <li>
            <Link to="/dashboard" style={linkStyles}>Dashboard</Link>
          </li>
        </ul>
      </nav>
      <p style={{ position: 'absolute', right: '1rem', top: '1rem', color: 'black' }}>
        {user.name ? `Welcome, ${user.name}` : "Welcome, Guest"}
      </p>
    </header>
  );
}

export default Header;
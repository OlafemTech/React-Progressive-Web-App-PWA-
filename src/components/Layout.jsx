import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/main.css';

function Layout({ children }) {
  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <div className="logo">React PWA</div>
          <nav>
            <ul className="nav-links">
              <li>
                <NavLink to="/" className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }>
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default Layout;

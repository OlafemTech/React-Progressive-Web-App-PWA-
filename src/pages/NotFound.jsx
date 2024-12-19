import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ 
      textAlign: 'center', 
      paddingTop: '4rem',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{ fontSize: '4rem', color: 'var(--primary-color)' }}>404</h1>
      <h2 style={{ marginTop: '1rem' }}>Page Not Found</h2>
      <p style={{ marginTop: '1rem' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '2rem' }}>
        <button className="button">
          Return Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;

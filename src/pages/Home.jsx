import React from 'react';

function Home() {
  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Welcome to React PWA</h1>
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div className="card">
          <h2>Progressive Web App</h2>
          <p>Experience native app-like features with modern web technologies.</p>
          <button className="button" style={{ marginTop: '1rem' }}>
            Learn More
          </button>
        </div>
        <div className="card">
          <h2>Offline First</h2>
          <p>Access key features even without an internet connection.</p>
          <button className="button" style={{ marginTop: '1rem' }}>
            Try Offline
          </button>
        </div>
        <div className="card">
          <h2>Responsive Design</h2>
          <p>Optimized for all devices and screen sizes.</p>
          <button className="button" style={{ marginTop: '1rem' }}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

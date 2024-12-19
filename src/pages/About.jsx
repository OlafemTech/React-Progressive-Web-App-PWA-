import React from 'react';

function About() {
  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>About Our PWA</h1>
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2>Modern Web Technology</h2>
        <p style={{ marginTop: '1rem' }}>
          This Progressive Web Application is built using React and modern web technologies.
          It demonstrates the power of combining PWA capabilities with responsive design
          principles to create a seamless user experience across all devices.
        </p>
        <h3 style={{ marginTop: '2rem' }}>Key Features:</h3>
        <ul style={{ marginTop: '1rem', marginLeft: '1.5rem' }}>
          <li>Offline functionality</li>
          <li>Responsive design</li>
          <li>Fast loading times</li>
          <li>App-like experience</li>
          <li>Cross-platform compatibility</li>
        </ul>
        <button className="button" style={{ marginTop: '2rem' }}>
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default About;

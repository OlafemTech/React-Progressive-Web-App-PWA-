import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

// Lazy loaded components
const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;

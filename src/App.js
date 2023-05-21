import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChartPage from './pages/ChartPage';
import AboutPage from './pages/ThreePage';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className={'p-4'}>
        <Link className={'px-2 text-decoration-none text-info'} to="/">
          Chart
        </Link>

        <Link className={'px-2 text-decoration-none text-info'} to="/about">
          3D
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<ChartPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;

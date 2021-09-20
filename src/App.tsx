import React from 'react';
import './css/custom.css';
import { HashRouter as Router } from 'react-router-dom'
import logo from './logo.svg'
import Routes from './Routes/Routes';

const App: React.FC = () => {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;

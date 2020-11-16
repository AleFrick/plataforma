/*import './App.css';
import Routes from './routes'

function App() {
  return (
    <div className="App" style={{height:'100%'}}>      
      <Routes />
    </div>
  );
}

export default App; */


import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
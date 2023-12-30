import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Practice1 } from './practices/practice1';
import { Practice2 } from './practices/practice2';
import { Practice3 } from './practices/practice3';

function App() {
  return (
    <div className="App">
      <Practice1 />
      <Practice2 />
      <Practice3 />

    </div>
  );
}

export default App;

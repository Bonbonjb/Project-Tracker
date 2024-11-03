import '@testing-library/jest-dom';
import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import ProjectTracker from '.src/components/ProjectTracker';
import utils from './src/utils';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Management Tracker</h1>
      </header>
      <main>
        <ProjectTracker />
      </main>
    </div>
  );
}

export default App;

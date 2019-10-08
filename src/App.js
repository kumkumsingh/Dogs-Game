import React from 'react';
import './App.css';
import DoglistContainer from './Components/DoglistContainer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, dog lovers</h1>
        <h2>Welcome to this Dog game App</h2>
        <DoglistContainer/>
      </header>
    </div>
  );
}

export default App;

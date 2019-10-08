import React from 'react';
import './App.css';
import DoglistContainer from './components/DoglistContainer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi,Dog Lovers</h1>
        <h2>Welcome to DogGame App</h2>
        <DoglistContainer/>
      </header>
    </div>
  );
}

export default App;

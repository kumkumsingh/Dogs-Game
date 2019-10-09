import React from 'react';
import './App.css';
import DoglistContainer from './Components/DoglistContainer'
import { Route } from 'react-router-dom'
import DogImage from './Components/DogImageContainer'


function App() {
  return (
    <div className="App">
       
      <header className="App-header">
      <h1>Hi, dog lovers</h1>
       <h2>Welcome to this Dog game App</h2>
       <Route exact path="/" component={DoglistContainer} />
       <Route path="/dog-breeds/:breed" component={DogImage} />
      </header>
     
    </div>
  );
}

export default App;

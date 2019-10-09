import React from 'react';
import './App.css';
import DoglistContainer from './Components/DoglistContainer'
import { Route } from 'react-router-dom'
import DogImage from './Components/DogImage'


function App() {
  return (
    <div className="App">
       
      <header className="App-header">
<<<<<<< HEAD
      <h1>Hi, dog lovers</h1>
       <h2>Welcome to this Dog game App</h2>
       <Route exact path="/" component={DoglistContainer} />
=======
        <h1>Hi, dog lovers</h1>
        <h2>Welcome to this Dog game App</h2>
        <Route exact path="/" component={DoglistContainer} />
        <Route path="/dog-breeds/:breed" component={DogImage} />
>>>>>>> 06fb0891576d94e06631b214416a52805351fbd0
      </header>
      <Route path="/dog-breeds/:breed" component={DogImage} />
    </div>
  );
}

export default App;

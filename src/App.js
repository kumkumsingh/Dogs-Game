import React from 'react';
import './App.css';
import DoglistContainer from './Components/DoglistContainer'
import { Route } from 'react-router-dom'
import DogImageContainer from './Components/DogImageContainer';
import GameContainer from './Components/GameContainer'
import Game2Container from './Components/Game2Container'



function App() {
  return (
    <div className="App">
       
      <header className="App-header">
      
      <h1>Hi, dog lovers</h1>
       <h2>Welcome to this Dog game App</h2>
       <Route exact path="/" component={DoglistContainer} />
       <Route path="/dog-breeds/:breed" component={DogImageContainer} />
       {/* <Route path="./Components/Game1" component={Game1} /> */}
       <Route path="/Game1" component={GameContainer} />
       <Route path="/Game2" component={Game2Container} />
      {/* <Game1/>  */}
      </header>
     
    </div>
  );
}

export default App;

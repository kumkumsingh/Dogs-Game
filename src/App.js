import React from 'react';
import './App.css';
import DoglistContainer from './Components/DoglistContainer'
import { Route } from 'react-router-dom'
import DogImageContainer from './Components/DogImageContainer';
import GameContainer from './Components/GameContainer'
import Game2Container from './Components/Game2Container'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>The Dog Memory Game</h2>
      </header>
      <main>
        <div className="intro">
          This is an application showcasing different memory games with dogs.
          You can first memorise the names of all the dog breeds at this page.
          Then, you can continue to the games!
        </div>
        <div>
          <ul>
            The first game shows you a random picture of a dog and you choose the correct breed name from a list of 3 options.
            The second game is very similar. Here you get to see 3 images and have to pair the correct image with the name of the breed that is given. 
          </ul>
        </div>
        <br></br>
        {/* <button className="button">Play 'Memory Game with breednames'</button> */} 
      </main>
      <Route exact path="/" component={DoglistContainer} />
       <Route path="/dog-breeds/:breed" component={DogImageContainer} />
       {/* <Route path="./Components/Game1" component={Game1} /> */}
       <Route path="/Game1" component={GameContainer} />
       <Route path="/Game2" component={Game2Container} />
      {/* <Game1/>  */}
    </div>
  );
}

export default App;

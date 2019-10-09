import React from 'react';
import './App.css';
import DoglistContainer from './Components/DoglistContainer'
import { Route } from 'react-router-dom'
import DogImageContainer from './Components/DogImageContainer';


function App() {
  return (
    <div className="App">
       
      <header className="App-header">
      <h2>The Dog Memory Game</h2>
      </header>
      <div className="intro">This is an application showcasing different memory games with dogs. You can first memorise the names of all the dog breeds at this page. Then, you can continue to the games! 
      </div>
      <div>
      <ul>The first game shows you a random picture of a dog and it must ask the user to choose the correct breed name from a list of 3 options. The second game works the same, only you get to see 3 breednames and you can choose from 3 images.</ul>
      </div>
      <br></br>

      <button className="button">Play 'Memory Game with images'</button>
      <button className="button">Play 'Memory Game with breednames'</button>

       <Route exact path="/" component={DoglistContainer} />
       <Route path="/dog-breeds/:breed" component={DogImageContainer} />
    </div>
  );
}

export default App;

import React, { Component } from 'react'

export default class DogList extends Component {
    renderDogBreed(breed) {
        return <li key={breed}>{breed}</li>
      }
      render() {
        //console.log(this.props);
          
        const { dogBreeds } = this.props
        //console.log('what is dogbreed', dogBreeds);
        
        return (
          <div className="dogs-list">
            <h2>Dogs List </h2>
            { !dogBreeds && 'Loading...' }
            {
              dogBreeds &&
              <ul>
              { dogBreeds.map((breed)=> this.renderDogBreed(breed)) }
              </ul>
            }
          </div>
        )
      }
    }
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DogList extends Component {
    renderDogBreed(breed) {

        return( <li key={breed}><Link to={`/dog-breeds/${breed}`}>{breed}</Link></li>)
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
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

 export default class DogImage extends Component {

    render() {
    return (
      <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>

      This page will show image of a random dog breed.
      {/* { this.props.Images && this.props.Images.map(url => <img src={ url } alt="Dog" />) }
      { !this.props.Images && 'Loading...' } */}
      {this.props.Images.map(url =>
       <img src = {url} alt="Dog"/>)}
      
     {/* <img src={this.props.Images}></img> */}
      <Link to="/">Go back to the index</Link>
    </div>
        )
    }
}

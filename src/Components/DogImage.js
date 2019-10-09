import { Link } from 'react-router-dom'
import React, { Component } from 'react'

 export default class DogImage extends Component {

    render() {
    return (
      <div className="dog-breed-images">
      <h3 className="dog-images">Images of </h3>

      Memorise how the breed looks like!
      <br></br>
      {/* { this.props.Images && this.props.Images.map(url => <img src={ url } alt="Dog" />) }
      { !this.props.Images && 'Loading...' } */}
      {this.props.Images.map(url =>
       <img src = {url} alt="Dog"/>)}
      
     {/* <img src={this.props.Images}></img> */}
     <br></br>
     <br></br>
      <Link to="/"> <strong>Go back to the homepage</strong></Link>
    </div>
        )
    }
}

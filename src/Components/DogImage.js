import { Link } from 'react-router-dom'
import React, { Component } from 'react'

 export default class DogImage extends Component {

    render() {
        console.log('breed name',this.props.breed)
    return (
      <div className="dog-breed-images">
      <h3 className="dog-images">Images of the breed</h3>
      Memorise how the breed looks like!
      <br></br>
      {/* { this.props.Images && this.props.Images.map(url => <img src={ url } alt="Dog" />) }
      { !this.props.Images && 'Loading...' } */}
      {this.props.Images.map(url =>
       <img src = {url} alt="Dog" />)}
      
     {/* <img src={this.props.Images}></img> */}
     <br></br>
     <br></br>
      <Link to="/"> <strong>Go back to the homepage</strong></Link>
    </div>
        )
    }
}

import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getDogRandomImage} from '../Actions/Dog'

 class DogBreedImages extends Component {
    componentDidMount(){

        this.props.getDogRandomImage()
    }
    render() {
        console.log('checking the image',this.props)
     return (
      <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>

      This page will show image of a random dog breed.


      <Link to="/">Go back to the index</Link>
    </div>
        )
    }
}
const mapStateToProps = (state) => {

    return{
    dogImage : state
    }
}
export default connect(mapStateToProps, { getDogRandomImage })(DogBreedImages)
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getDogRandomImage} from '../Actions/Dog'

<<<<<<< HEAD:src/Components/DogImage.js
 export default class DogImage extends Component {
=======
 class DogImage extends Component {
    componentDidMount(){
>>>>>>> 06fb0891576d94e06631b214416a52805351fbd0:src/Components/DogImage.js

    render() {
        //console.log('checking the image',this.props)
     return (
      <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>

      This page will show image of a random dog breed.


      <Link to="/">Go back to the index</Link>
    </div>
        )
    }
}
<<<<<<< HEAD:src/Components/DogImage.js
=======
const mapStateToProps = (state) => {

    return{
    dogImage : state
    }
}
export default connect(mapStateToProps, { getDogRandomImage })(DogImage)
>>>>>>> 06fb0891576d94e06631b214416a52805351fbd0:src/Components/DogImage.js

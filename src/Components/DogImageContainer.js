import React, { Component } from 'react'
import {getDogRandomImage} from '../Actions/Dog'
import {connect} from 'react-redux'
import DogImageRender from './DogImage'

 class DogImage extends Component {
    componentDidMount(){
        // console.log(this.props)
        const breed = this.props.match.params.breed
        this.props.getDogRandomImage(breed)
        // console.log('dogbreedimage',breed)
    }
   
    render() {
        return (
            <div>
               <DogImageRender images={this.props.dogs.current}/> 
            </div>
        )
        
    }
}
 const mapStateToProps = (state) => ({
    dogs: state
 })
 export default connect (mapStateToProps,{getDogRandomImage})(DogImage)

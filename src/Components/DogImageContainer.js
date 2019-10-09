import React, { Component } from 'react'
import {getDogRandomImage} from '../Actions/Dog'
import {connect} from 'react-redux'
import DogImage from './DogImage'

 class DogImageContainer extends Component {
    componentDidMount(){
        console.log(this.props)
        const breed = this.props.match.params.breed
        this.props.getDogRandomImage(breed)
        console.log('dogbreedimage',breed)
    }
   
    render() {
        console.log('this.props.images',this.props.Images)
        return (
            <div>
               <DogImage Images= {this.props.Images}/> 
            </div>
        )
    }
}
 const mapStateToProps = (state) => ({

    Images:state
 })
 export default connect (mapStateToProps,{getDogRandomImage})(DogImageContainer)

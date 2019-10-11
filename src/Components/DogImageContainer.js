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
        console.log('this.props.images',this.props.images)
        return (
            <div>
               <DogImage images= {this.props.images}/> 
            </div>
        )
    }
}
 const mapStateToProps = (state) => ({

    images:state
 })
 export default connect (mapStateToProps,{getDogRandomImage})(DogImageContainer)

import React, { Component } from 'react'
import {getDogRandomImage} from '../Actions/Dog'
import {connect} from 'react-redux'
import DogImage from './DogImage'


export default class DogImageContainer extends Component {
    componentDidMount(){

        this.props.getDogRandomImage(breed)
    }
   
    render() {
        console.log('dogbreedimage',this.props.getDogRandomImage)
        return (
            <div>
                <DogImage dogImage={this.props.dogs} />    
            </div>
        )
    }
}
 const mapStateToProps = (state) => {
    DogImage:state
 }
 export default connect ( mapStateToProps, { getDogRandomImage })(DogImageContainer)
import React, { Component } from 'react'
import {getDogRandomImage} from '../Actions/Dog'

export default class DogImageContainer extends Component {
    componentDidMount(){

        this.props.getDogRandomImage
    }
   
    render() {
        console.log('dogbreedimage',this.props.getDogRandomImage)
        return (
            <div>
                
            </div>
        )
    }
}
 const mapStateToProps = (state) => {

    DogImage:state
 }
 export default connect ({getDogRandomImage,mapStateToProps})(DogImageContainer)
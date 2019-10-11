import React, { Component } from 'react'
import { getDogRandomImage } from '../Actions/Dog'
import { connect } from 'react-redux'
import DogImage from './DogImage'

class DogImageContainer extends Component {
    componentDidMount() {
        //console.log(this.props)
        const breedName = this.props.match.params.breed
        this.props.getDogRandomImage(breedName)
        console.log('dogbreedimage', breedName)
    }

    render() {
        console.log('this.props.images', this.props.Images)
        return (
            <div>
                <DogImage Images={this.props.Images.dogImage} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({

    Images: state.reducer
})
export default connect(mapStateToProps, { getDogRandomImage })(DogImageContainer)

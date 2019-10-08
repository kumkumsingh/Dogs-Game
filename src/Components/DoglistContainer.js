import React, { Component } from 'react'
import DogList from './DogList'
import {getDogList} from '../Actions/Dog'
import {connect} from 'react-redux'

class DoglistContainer extends Component {
  // state = { dogBreeds: null }
  componentDidMount() {
    this.props.getDogList()
  }

  render() {
    // console.log('rendering from container', this.state.dogs);
    
    return (
    <DogList dogBreeds={this.props.dogs} />    
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dogs: state
  }
}

export default connect(mapStateToProps, { getDogList })(DoglistContainer)
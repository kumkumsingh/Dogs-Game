import React, { Component } from 'react'
import DogList from './DogList'
import {getDogList} from '../Actions/Dog'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class DoglistContainer extends Component {
  // state = { dogBreeds: null }
  componentDidMount() {
    this.props.getDogList()
  }
  render() {
    // console.log('rendering from container', this.state.dogs);
    return (
    <div>
    <DogList dogBreeds={this.props.dogs.dogList} />   
    <Link to="/Game1">Game1</Link>
    <Link to="/Game2">Game2</Link>
    </div>
    )
  }
  
}
const mapStateToProps = (state) => {
  return {
    dogs: state.reducer
  }
}

export default connect(mapStateToProps, { getDogList })(DoglistContainer)
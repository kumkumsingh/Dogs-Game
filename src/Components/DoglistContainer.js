import * as request from 'superagent'
import React, { Component } from 'react'
import DogList from './DogList'
import {getDogList} from './Actions/Dog'
import {connect} from 'react-redux'

class DoglistContainer extends Component {
  state = { dogBreeds: null }

  render() {
    return <DogList dogBreeds={this.props.getDogList()} />
  }
  
}




export default connect(null,{getDogList})(DoglistContainer)
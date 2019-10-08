import * as request from 'superagent'
import React, { Component } from 'react'
import DogList from './DogList'
import connect from 'react-redux'

export default class DoglistContainer extends Component {
  state = { dogBreeds: null }
  
  render() {
    return <DogList dogBreeds={this.state.dogBreeds} />
  }
}
// export default connect()(DoglistContainer)
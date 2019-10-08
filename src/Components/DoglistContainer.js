import * as request from 'superagent'
import React, { Component } from 'react'
import DogList from './DogList'

export default class DoglistContainer extends Component {
  state = { dogBreeds: null }
  
  render() {
    return <DogList dogBreeds={this.state.dogBreeds} />
  }
}
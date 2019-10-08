import * as request from 'superagent'
import React, { Component } from 'react'
import DogList from './DogList'
import connect from 'react-redux'

export default class DoglistContainer extends Component {
  state = { dogBreeds: null }
  
  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const breeds = Object.keys(response.body.message)
        this.updateBreeds(breeds)
      })
      .catch(console.error)
  }
  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }
  render() {
    return <DogList dogBreeds={this.state.dogBreeds} />
  }
}
// export default connect()(DoglistContainer)
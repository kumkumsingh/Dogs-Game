import * as request from 'superagent'
import React, { Component } from 'react'
import DogList from 'DogList'

export default class DoglistContainer extends Component {
    state = {}
    componentDidMount() {
        request
          .get('https://dog.ceo/api/breeds/list/all')
          .then(response => this.setState({ dogs: response.body }))
          .catch(console.error)
      }
    
      render() {
        if (!this.state.dogs) return 'Loading...'
        return <DogList albums={this.state.dogs} />
      }
}

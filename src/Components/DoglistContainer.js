import React, { Component } from 'react'
import DogList from './DogList'
import { getDogList } from '../Actions/Dog'
import { connect } from 'react-redux'
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
        <div>
          <p><strong>Lets Play a Game</strong></p>
          <Link to="/Game1"><button type="button" className="button">
            Game#01
          </button></Link>
          </div>
          <br></br>
          <div>
          <Link to="/Game2"><button type="button" className="button">
            Game#02
          </button></Link>
        </div>
        <DogList dogBreeds={this.props.dogs.dogList} />
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
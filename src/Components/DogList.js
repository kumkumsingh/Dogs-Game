import React, { Component } from 'react'
import DogListContainer from 'DoglistContainer'

export default class DogList extends Component {
    

    render() {
        return (
            <div className="dogs-list">
                <h1>Dogs List</h1>
                {/* if state dogbreeds is null, display 'Loading' */}
                {this.props.dogs === null && 'Loading...'}
            </div>
        )
    }
}

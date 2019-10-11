import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export default class Game2 extends Component {
    render() {
        return (
            <div className="dog-breed-images">
            <h1>Memory Game with breednames</h1>
               This game shows you three images of different breeds and one name which you will pair with the correct image
            {this.props.Images.map(url =>
             <img src = {url} alt="Dog"/>)}
            <Link to="/">Go back to the index</Link>
            </div>
        )
    }
}


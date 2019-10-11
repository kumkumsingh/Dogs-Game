import React, { Component } from 'react'
import {connect} from 'react-redux'
import Game1 from './Game1'

class Game1Container extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    images: state
})



export default connect (mapStateToProps, (Game1Container))



import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getDogRandomImage} from '../../Actions/Dog'
import GameOne from './GameOne'

//the smart component, it is connected to the reducre/state
class GameOneContainer extends Component {

    componentDidMount() {
        console.log(this.props);
    }
    
    render() {
        return (
            <div> 
              <h1>Testing...</h1>
           </div>
        );
    }
}

const mapStateToProps = (state) => ({

    gamingImage:state
 })

export default connect (mapStateToProps, {getDogRandomImage }) (GameOneContainer);
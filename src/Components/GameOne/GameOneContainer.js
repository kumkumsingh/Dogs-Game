import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getDogRandomImage} from '../../Actions/Dog'
import GameOne from './GameOne';


class GameOneContainer extends Component {

    render() {
        console.log('what is props?', this.props);
        
        return (
            <div> 
              <GameOne />
           </div>
        );
    }
}

const mapStateToProps = (state) => ({

    gamingImage: state
 })

export default connect (mapStateToProps, {getDogRandomImage }) (GameOneContainer);
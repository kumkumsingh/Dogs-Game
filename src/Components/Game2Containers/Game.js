import React, { PureComponent } from 'react'
// What's the difference between pure c and normal?
import { connect } from 'react-redux'
import startGame from '../../Actions/game2'
import Game2 from '../../Components/Game2'
//import Question from './Question'
//import AnswerButton from './AnswerButton';
//import Feedback from '../components/Feedback'

class Game extends PureComponent {
    componentDidMount(){
        console.log(this.props)
        const breed = this.props.match.params.breed
        this.props.startGame()
    }

  
    render() {
        console.log('this.props.images',this.props.Images)
        return (
            <div>
               <Game2 Images= {this.props.Images}/> 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    Images: state
    
})

export default connect (mapStateToProps, { startGame })(Game)


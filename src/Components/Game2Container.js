import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDogRandomImageGame2 } from '../Actions/Game2Actions'
import { getDogRandomImageGame2CorrectAns } from '../Actions/Game2ActionsCorrectAns'

class Game2Container extends Component {
    state = {
        answeredGame2: null,
        scoreGame2: 0,

    }
    componentDidMount() {

        this.props.getDogRandomImageGame2()
        this.props.getDogRandomImageGame2CorrectAns()
        // console.log('checking props value', this.props.Game2Image)
    }
    checkCorrectAnswerGame2 = (event) => {

        const breedNameGame2 = event.target.getAttribute('src').split('/')[4].split('-')[0]
        // console.log('breedNameGame2', breedNameGame2)
        const Game2CorrectAnsCheck = this.props.Game2ImageCorrectAns.Game2correctAnswer
        if (Game2CorrectAnsCheck === breedNameGame2) {
            this.setState({
                answeredGame2: 'Yipee... correct answer-Next Question',
                scoreGame2: this.state.scoreGame2 + 1
            })
            setTimeout(() => {
                this.props.getDogRandomImageGame2();
                this.props.getDogRandomImageGame2CorrectAns()
                this.setState({ answeredGame2: null })
            }, 4000)

        }
        else {
            this.setState({
                answeredGame2: 'Wrong ans wait for 4 seconds',
                scoreGame2: this.state.scoreGame2
            })

            setTimeout(() => {
                this.props.getDogRandomImageGame2();
                this.props.getDogRandomImageGame2CorrectAns()
                this.setState({ answeredGame2: null })
            }, 4000)
        }

    }
    render() {
        const imageArray = this.props.Game2Image.dogImageGame2
        const Game2CorrectAns = this.props.Game2ImageCorrectAns.Game2correctAnswer
        const Game2CorrectAnsImage = this.props.Game2ImageCorrectAns.dogImageGame2CorrectAns

        // console.log('Game2CorrectAns', Game2CorrectAns)
        // console.log('Game2CorrectAnsImage', Game2CorrectAnsImage)

        return (
            <div>
                <h1>Welcome to Game2</h1>
                <p>Score:{this.state.scoreGame2}</p>
                {imageArray
                    .concat(Game2CorrectAnsImage)
                    .sort()
                    .map((image) =>
                        <img src={image} alt="No Image available" style={{ maxWidth: '40%' }}
                            onClick={this.checkCorrectAnswerGame2}></img>)}
                <br></br>
                <p>{this.state.answeredGame2}</p>
                <p>{Game2CorrectAns}</p><br></br>
                <Link to="/">Go back to the index</Link>
            </div>



        )
    }
}

const mapStatesToProps = (state) => ({

    Game2Image: state.Game2Reducer,
    Game2ImageCorrectAns: state.Game2ReducerCorrectAns

})

export default connect(mapStatesToProps, { getDogRandomImageGame2, getDogRandomImageGame2CorrectAns })(Game2Container)

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getDogRandomImageGame1 } from "../Actions/GameActions";
import { getDogList } from "../Actions/Dog";

class Game1 extends Component {
  state = {
    answered: null,
    score: 0
  };

  componentDidMount() {
    this.props.getDogRandomImageGame1();
    this.props.getDogList();
  }
  checkCorrectAnswer = (event) => {
    const value = event.target.innerHTML;
    console.log("value", value);
    const correcAnswerDogGame1 = this.props.Game1Image.correctAnswer;
    console.log(correcAnswerDogGame1);
    if (correcAnswerDogGame1 === value) {
      this.setState({
        answered: "Yipee... correct answer-Next Question",
        score: this.state.score + 1
      });

      setTimeout(() => {
        this.props.getDogRandomImageGame1();
        this.setState({ answered: null });
      }, 4000);
    } else {
      this.setState({
        answered: `Wrong ans wait for 3 seconds and Correct Answer is 
            ${correcAnswerDogGame1}`,
        score: this.state.score
      });

      setTimeout(() => {
        this.props.getDogRandomImageGame1();
        this.setState({ answered: null });
      }, 4000);
    }
  };
  render() {
    const correcAnswerGame1 = this.props.Game1Image.correctAnswer;
    console.log("correcAnswerGame1", correcAnswerGame1);
    const ansArray = this.props.dogBreeds.dogList;
    const randomAnswer1 = ansArray[Math.floor(Math.random() * ansArray.length)];
    const randomAnswer2 = ansArray[Math.floor(Math.random() * ansArray.length)];
    const finalAnswer = [
      correcAnswerGame1,
      randomAnswer1,
      randomAnswer2
    ].sort();

    return (    
      <div>
        <Link to="/" className="App-link">Go back to the index</Link>
        <h1>Welcome to Game1</h1>
        <h2>Choose from</h2>
        <p>Score:{this.state.score}</p>

        <img
          src={this.props.Game1Image.dogImageGame1}
          alt="Game1"
          style={{ maxWidth: "80%" }}
        ></img>
        {this.state.answered === null ? <></> : <p>{this.state.answered}</p>}
        <div>
          <button id="btn1" onClick={this.checkCorrectAnswer} className="button">
            {finalAnswer[0]}
          </button>
          <button id="btn2" onClick={this.checkCorrectAnswer} className="button">
            {finalAnswer[1]}
          </button>
          <button id="btn3" onClick={this.checkCorrectAnswer} className="button">
            {finalAnswer[2]}
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  Game1Image: state.GameReducer,
  dogBreeds: state.reducer
});
export default connect(
  mapStateToProps,
  { getDogRandomImageGame1, getDogList }
)(Game1);

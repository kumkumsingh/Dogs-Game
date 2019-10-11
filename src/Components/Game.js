import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
//import { shuffle, sampleSize, sample } from 'lodash/collection'
//import { fetchBreedList } from './Question'
//import Question from './Question'
//import AnswerButton from './AnswerButton'


class Game extends PureComponent {
    componentDidMount(){
        this.props.fetchBreedList()
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}



const mapStateToProps = state => {

}

export default connect (mapStateToProps, {} (Game))
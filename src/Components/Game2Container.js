import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDogRandomImageGame2 } from '../Actions/Game2Actions'
//import { getDogList } from '../Actions/Dog'

class Game2Container extends Component {
    componentDidMount(){

    this.props.getDogRandomImageGame2()
    console.log('checking props value',this.props.Game2Image)
    }
    render() {
        // if(this.props.Game2Image.dogImageGame2 !==null ){
        const imageArray = this.props.Game2Image.dogImageGame2.sort()
        console.log('imagearray',imageArray)
        const breedNameFromImage = imageArray[0]
        console.log('breedNameFromImage',breedNameFromImage)
        return (
            <div>
                <h1>Welcome to Game2</h1>
                
                {/* <button id="breedName">{breedNameFromImage}</button> */}
              
                {console.log(imageArray[0])}
                {console.log(imageArray[1])}
                {console.log(imageArray[2])}
                {imageArray.map((image)=>
                    <img src = {image} alt = "No Image available" style={{ maxWidth: '40%' }}></img>)}
                    <br></br>
                    <Link to="/">Go back to the index</Link>
                    {/* <img src = {imageArray[0]} alt = "No Image available"></img> */}
               

            </div>
        )
    }
}

const mapStatesToProps = (state) =>({

    Game2Image : state.Game2Reducer,
    //dogBreeds: state.reducer

})

export default connect(mapStatesToProps ,{getDogRandomImageGame2})(Game2Container)
// , getDogList

import { Link } from "react-router-dom";
import React from "react";

export default props => {
  if(!props.images.length > 0){
    return null
  }
  // when the state is not loaded / when its empty, return null so that the program doesn't try to map over an empty array.

  return (
    <div className="dog-breed-images">
      <h3 className="dog-images">Images of the breed</h3>
      {console.log(props)}
      Memorise how the breed looks like!
      <br></br>
      {/* { this.props.Images && this.props.Images.map(url => <img src={ url } alt="Dog" />) } */}
      {props.images.map(url => (
        <img src={url} alt="Dog" />
      ))}
      {/* <img src={this.props.Images}></img> */}
      <br></br>
      <br></br>
      <Link to="/">
        {" "}
        <strong>Go back to the homepage</strong>
      </Link>
    </div>
  );
};

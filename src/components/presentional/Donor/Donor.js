import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

export default class Donor extends React.Component {
  render() {    
    return (
      <React.Fragment>
        <p>{this.props.user.name}</p>
        <p>{this.props.user.phone}</p>
        <p>{this.props.user.bloodType}</p>
      
      </React.Fragment>
    );
  }
}
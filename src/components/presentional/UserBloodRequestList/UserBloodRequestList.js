import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

export default class UserBloodRequestList extends React.Component {

  render() {
    return (
      <React.Fragment>
        <p>{this.props.userRequest.username}</p>
        <p>{this.props.userRequest.bloodType}</p>
        <p>{this.props.userRequest.location}</p>
        {/* <p>{this.props.userRequest.requestedDate}</p>         */}
      
      </React.Fragment>
    );
  }
}
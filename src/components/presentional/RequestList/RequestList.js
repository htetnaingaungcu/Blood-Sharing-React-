import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

export default class RequestList extends React.Component {

  render() {
    const donorUid = this.props.donorUid;
    const requestUserUid = this.props.request.uid;

    return (
      <React.Fragment>
        <p>{this.props.request.name}</p>
        <p>{this.props.request.bloodType}</p>
        <p>{this.props.request.location}</p>
        <p>{this.props.request.phone}</p>
        <Link to={'/message/'+ donorUid + requestUserUid}><button>Contact</button></Link>      
      </React.Fragment>

    );
  }
}
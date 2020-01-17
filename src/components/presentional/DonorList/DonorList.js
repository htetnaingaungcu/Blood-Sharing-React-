import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

export default class DonorList extends React.Component {

  render() {
    const donorUid = this.props.donor.uid;
    const requestUserUid = this.props.requestUid;
    
    return (
      <React.Fragment>
        <p>{this.props.donor.name}</p>
        <p>{this.props.donor.bloodType}</p>
        <p>{this.props.donor.location}</p>
        <p>{this.props.donor.phone}</p>
        <Link to={'/message/'+ donorUid + requestUserUid}><button>Contact</button></Link>
        
      </React.Fragment>

    );
  }
}
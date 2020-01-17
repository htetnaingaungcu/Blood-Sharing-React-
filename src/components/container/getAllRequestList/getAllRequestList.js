import React from "react";
import { BrowserRouter as  Router, Route, Link,Redirect } from "react-router-dom";

import { connect } from 'react-redux';
import { fetchBloodRequests } from '../../../actions/bloodRequestActions';
import BloodRequest from "../BloodRequest";
import { Container, Row } from "react-bootstrap";

class getAllRequestList extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchBloodRequests();

        this.state = {
			redirectToReferrer : false
		};
    }

    render() {
        const bloodRequests = this.props.bloodRequests;
        console.log(bloodRequests);
        var request_arr = [];
        if(bloodRequests !== undefined){
            bloodRequests.map((bloodRequest, index) => {  
                request_arr.push(<BloodRequest key={index} bloodRequest={bloodRequest} />);
            });
            console.log('req', request_arr)
            return (
                <React.Fragment>
                    <Container><Row>{request_arr}</Row></Container>
                </React.Fragment>
                
            );
        }   
            
            

        return null;
        
    }
}

const mapStateToProps = state => ({
    bloodRequests: state.bloodRequests,
  });
  
  const mapDispatchToProps = {
    fetchBloodRequests,
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(getAllRequestList);
import React from "react";
import { BrowserRouter as  Router, Route, Link,Redirect } from "react-router-dom";

import { connect } from 'react-redux';
import { fetchRequestByBloodType } from '../../../actions/bloodRequestActions';
import { fetchDonors } from '../../../actions/donorActions';
import { fetchUsers } from '../../../actions/userActions';
import BloodRequest from "../BloodRequest";
import { Container, Row } from "react-bootstrap";
import Donor from "../../presentional/Donor";
import RequestList from '../../presentional/RequestList';

import firebase from '../../../utilites/firebase';

class BloodRequestList extends React.Component {
    constructor(props) {
        super(props);  
        this.props.fetchDonors();
        this.props.fetchUsers();

        const uid = this.props.currentUser.uid;
        const donorList = this.props.donors;
        this.state = { requests: [] };
        const donor = donorList.find( item => item.uid == uid);
        
        if(donor){
            const users = this.props.users;
            const user = users.find( item => item.id == uid);
            const bloodType = user.bloodType;   
            this.props.fetchRequestByBloodType(bloodType);
        }      
              
    }

    render() {
        const bloodRequests = this.props.bloodRequests;
        const uid = this.props.currentUser.uid;
        const users = this.props.users;
        const user = users.find( item => item.id == uid);
        const donorList = this.props.donors;     
        const donor = donorList.find( item => item.uid == uid);

        if (this.state.requests.length == 0) {
            const getRequest = firebase.firestore().collection('Donor').doc(donor.id).collection('Request_User').get();

            getRequest.then(snapshot => {
                const requests = [];
                snapshot.docs.forEach(item => {
                    const request = item.data();
                    requests.push(request);
                });
                this.setState({ requests });
            });
        }

        if(this.state.requests !== undefined){
            var request_Arr = [];
          
            this.state.requests.map((request, index) => {
                request_Arr.push(<RequestList key={index} request={request} donorUid={donor.uid}/>);
            });

        }
        
        if(bloodRequests !== undefined){
            var request_arr = [];      
          
            bloodRequests.map((bloodRequest, index) => {  
                request_arr.push(<BloodRequest key={index} bloodRequest={bloodRequest} />);
            });
        }
            
        return (
            <React.Fragment>
                <h3>Donor Information</h3>
                <Donor user={user}/>

                <h3>Requests</h3>
                {request_Arr}

                <h3>Blood Request Lists</h3>
                <Container><Row>{request_arr}</Row></Container>
            </React.Fragment>
                
            );
               
    }
}

const mapStateToProps = state => ({
    bloodRequests: state.bloodRequests,
    currentUser : state.currentUser,
    donors : state.donors,
    users : state.users
  });
  
const mapDispatchToProps = {
    fetchRequestByBloodType,
    fetchDonors,
    fetchUsers
}
  
export default connect(mapStateToProps,mapDispatchToProps)(BloodRequestList);
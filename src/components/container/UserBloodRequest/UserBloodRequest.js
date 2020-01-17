import React from "react";
import { BrowserRouter as  Router, Route, Link,Redirect } from "react-router-dom";
import firebase from '../../../utilites/firebase';

import { connect } from 'react-redux';
import { fetchRequestByUID,fetchBloodRequests, fetchDonorList } from '../../../actions/bloodRequestActions';
import UserBloodRequestList from '../../presentional/UserBloodRequestList';
import DonorList from '../../presentional/DonorList';

class UserBloodRequest extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchBloodRequests();
        this.state = { donors: [] };
    }

    render() {
        const uid = this.props.currentUser.uid;
        const requestList = this.props.bloodRequests;
        const request = requestList.find( item => item.uid == uid); 

        if(request != undefined) {
            if (this.state.donors.length == 0) {
                const getDonor = firebase.firestore().collection('Request_User').doc(request.id).collection('Donor').get();
                
                getDonor.then( snapshot => {
                    const donors = [];
                    snapshot.docs.forEach( doc => {
                        const donor = doc.data();
                        donors.push(donor);                       
                    })
                    this.setState({ donors });
                })  
            }

            return (
                <React.Fragment>
                    <UserBloodRequestList userRequest={request}/>

                    <h3>Donor Lists</h3> 
                    {
                        this.state.donors.map((donor, index) => (
                            <DonorList key={index} donor={donor} requestUid={request.uid}/>
                        ))
                    }
                   
                </React.Fragment>
            )
            
        }
        else{
            return (
                <p>No Request</p>
            )
        }
               
    }
}

const mapStateToProps = state => ({
    currentUser : state.currentUser,
    bloodRequests: state.bloodRequests,
  });
  
  const mapDispatchToProps = {
    fetchBloodRequests,
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(UserBloodRequest);
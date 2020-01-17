import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

import { fetchBloodRequests } from '../../../actions/bloodRequestActions';
import UserBloodRequest from '../UserBloodRequest';
import BloodRequestForm from '../BloodRequestForm';

import { connect } from "react-redux";

class RequestPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchBloodRequests();
        
    }
    render() {
        const uid = this.props.currentUser.uid;
        const requestList = this.props.requests;
        const request = requestList.find( item => item.uid == uid);
        if(request != undefined) {
            return <UserBloodRequest />     
        }
        else{
            return <BloodRequestForm />
        }
        
    }
}

const mapStateToProps  = state => ({ 
    currentUser : state.currentUser,
    requests : state.bloodRequests
})

const mapDispatchToProps = {
    fetchBloodRequests
}
  
export default connect (mapStateToProps, mapDispatchToProps) (RequestPage)
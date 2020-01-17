import React from "react";
import { BrowserRouter as  Router, Route, Link,Redirect } from "react-router-dom";
import Calendar from 'react-calendar';


import { connect } from "react-redux";
import { updateUser } from "../../../actions/userActions";

class DonationSecondForm extends React.Component {
    constructor(props) {
        super(props);
        this.weight = React.createRef();
        
        this.state = {
            lastestDonationDate: new Date(),
            completeDonationSecondForm: false
        };
    }
    handleOnChange = date => {
        this.setState({
            lastestDonationDate: date
        });
    }
    handleOnSubmit = event => {
        event.preventDefault();

        const user_id = this.props.currentUser.uid;

        const userData = {
            latestDonatedDate: this.state.lastestDonationDate,
            weight: this.weight.current.value
        };
        this.props.updateUser(userData, user_id);
    
        this.setState({
            completeDonationSecondForm: true
        });

        
    };

    render() {
        console.log(this.state.completeDonationSecondForm);
        if (this.state.completeDonationSecondForm) 
        return <Redirect to='/requestlist' />;

        return (
            <form onSubmit={this.handleOnSubmit}>
                <label htmlFor="lastestDonationDate">Lastest Donation Date : </label>
                
                <Calendar value={this.state.latestDonatedDate} onChange={this.handleOnChange}/>
                <label htmlFor="weight">Weight : </label>
                <input id="weight" ref={this.weight} required />
                <br />
                
                <div>
                    <Link to="/"><button type="submit">Cancel</button></Link>
                    <button type="submit">Yes, I' Done</button>
                </div>               
                
            </form>
        );
    }
}

const mapStateToProps = state => ({
    currentUser : state.currentUser
})

const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(DonationSecondForm);
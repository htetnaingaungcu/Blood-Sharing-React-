import React from 'react';
import firebase from '../../../utilites/firebase';
import './NewMessageForm.css';
import ImageUpload from '../ImageUpload';
import { connect } from 'react-redux';

const firestore = firebase.firestore();

class NewMessageForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        new_message: ''
      }
      this.imageFile = React.createRef();
    }
  
    handleOnChange = event => {
      this.setState({
        new_message: event.target.value
      });
      firestore.collection('setting')
        .doc('typing')
        .update({ status: true });
    }
  
    handleOnSubmit = event => {
      event.preventDefault();
      const message_id = this.props.messageId;
      
      this.setState({ new_message: "" });
      const message = {
          message: this.state.new_message,
          sendAt: new Date(),
          uid: this.props.currentUser.uid
      }

      if (this.state.new_message !== "") {
        firestore.collection('Chat_Room').doc(message_id).collection('Message').add(message)
      }
  
    }
  
    handleStartTyping = () => {
      firestore.collection('setting')
        .doc('typing')
        .update({ status: true });
    }
  
    handleStopTyping = () => {
      firestore.collection('setting')
        .doc('typing')
        .update({ status: false });
    }
  
  
    render() {
  
      return (
          <form className="newMessageForm" onSubmit={this.handleOnSubmit}>
            <input placeholder="your message here"
              onBlur={this.handleStopTyping}
              onChange={this.handleOnChange}
              value={this.state.new_message}>
            </input>
            <button type="submit">Sent</button>
          </form>        
      );
    }
  }
  
  
const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
})
  
export default connect(mapStateToProps)(NewMessageForm);
  
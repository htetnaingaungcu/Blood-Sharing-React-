import React from "react";
import { BrowserRouter as  Router, Route, Link,Redirect } from "react-router-dom";
import firebase from "../../../utilites/firebase";
import { connect } from 'react-redux';

import './MessagePage.css';
import NewMessageForm from "../NewMessageForm";
import ImageUpload from "../ImageUpload";
import MessageItem from "../../presentional/MessageItem";
import TypingIndicator from "../../presentional/TypingIndicator";

const firestore = firebase.firestore();

class MessagePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            settings: [],
        }

        const uids = this.props.match.params.id;

        // Create Message Conversation
        firestore.collection('Chat_Room').doc(uids).get()
        .then( (chat) => {
            const chatRoom = chat.data()

            if(chatRoom == "undefined") {
                const chatRoom = {
                    roomId: uids,
                    roomName: "Blood Sharing Group",
                    updateAt: new Date()
                }
                firebase.firestore().collection('Chat_Room').doc(uids).set(chatRoom);
            }
            else{
                firebase.firestore().collection('Chat_Room').doc(uids).collection('Message').onSnapshot(snapshot => {
                    const messages = [];
                    snapshot.docs.forEach(item => {
                        const message = item.data();
                        message.id = item.id;
                        messages.push(message);
                        //console.log('messages Arr',messages)
                    })
                    messages.sort(
                      (a, b) => { return (a.sendAt.seconds > b.sendAt.seconds) ? 1 : -1 }
                    );
              
                    this.setState({
                      messages: messages
                    })
                })
        
                firestore.collection('setting').onSnapshot(snapshot => {
                    const settings = [];
                    snapshot.docs.forEach(item => {
                      const setting = item.data();
                      setting.id = item.id;
                      settings[setting.id] = setting;
                    })
                    this.setState({
                      settings: settings
                    })
                });
            }
        })
        .catch(err=>{
            console.log(err)
        })
        //console.log("state mess", this.state.messages)

    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    
    componentDidMount() {
        this.scrollToBottom();
    }
      
    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {

        const is_typing = this.state.settings['typing'] && this.state.settings['typing'].status;
        
        return (
            <React.Fragment>
                {/* {!this.props.user && <Redirect to="/login"/>} */}
                <div className="messagesHolder">
                    {this.state.messages.map(item => (
                        <MessageItem key={item.id} message={item} ownmessage = {item.uid === this.props.currentUser.uid} />
                    ))}
                    <div id="messageEnd" ref={(el) => { this.messagesEnd = el; }}></div>
                </div>

                {is_typing && (this.state.new_message === '') && (
                    <TypingIndicator></TypingIndicator>
                )
                }
                
                <React.Fragment>
                    <NewMessageForm messageId={this.props.match.params.id}></NewMessageForm>
                    <ImageUpload messageId={this.props.match.params.id}></ImageUpload>
                </React.Fragment>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
})
  
export default connect(mapStateToProps)(MessagePage);
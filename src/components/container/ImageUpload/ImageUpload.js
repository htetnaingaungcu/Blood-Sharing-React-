import React from 'react';
import './ImageUpload.css';
import firebase from '../../../utilites/firebase';
import { connect } from 'react-redux';

const firestore = firebase.firestore();
class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.imageFile = React.createRef();
  }

  addMessage = (url) => {
    const message = {
        image: url,
        sendAt: new Date(),
        uid: this.props.currentUser.uid
    }
    const message_id = this.props.messageId;
    
    firestore.collection('Chat_Room').doc(message_id).collection('Message').add(message)
  }

  handleFileOnChange = () => {
    const file = this.imageFile.current.files[0];
    var storageRef = firebase.storage().ref();

    const filePath = 'message/images/' + file.name;
    const imageRef = storageRef.child(filePath);

    imageRef
      .put(file)
      .then(() => {
        storageRef.child(filePath)
          .getDownloadURL().then(this.addMessage)

      })
      .catch(error => { console.log(error) });

  }

  render() {
    return (
      <div className="uploadHolder">
        <input
          ref={this.imageFile}
          onChange={this.handleFileOnChange}
          type="file" accept="image/*" />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
})

export default connect(mapStateToProps)(ImageUpload);
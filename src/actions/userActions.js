import {retrieveData,storeData} from "../utilites/localStorage";
import firebase from '../utilites/firebase';

export const fetchUsers = () => dispatch => {
    const users = [];
    const getUsers = firebase.firestore().collection('User').get();

    getUsers.then( (snapshot) => {
        snapshot.docs.forEach( item => {
            const user = item.data();
            user.id = item.id;
            users.push(user);
        });
        //console.log("Users", users)
        dispatch({
            type: 'FETCH_USERS',
            payload: users
        });
    }) 
};

export const getUserByUid = (uid) => dispatch => {
    firebase.firestore().collection('User').where('uid', '==', 'uid').get()
    .then( (user) => {
        console.log(user);
        dispatch({
            type: 'FETCH_USER_BY_UID',
            payload: user
        });
    })
}

export const insertUser = (email, password) => dispatch => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( result => {
        //console.log(result.user)
        const uid = result.user.uid;

        const newUser = {
            bloodType: '',
            chatRoom: '',
            dateOfBirth: '',
            gender: '',
            latestDonatedDate: '',
            location: '',
            name: '',
            phone: '',
            uid: uid,
            username: email,
            weight: '',
        }

        firebase.firestore().collection('User').doc(uid).set(newUser)
        .then( () => {
            newUser.id = uid;
            dispatch({
                type: 'ADD_NEW_USER',
                data : newUser
            });
        });

        //successEvent();
    })
    // .catch(error => {
    //     errorEvent(error);
    // });

};

export const registerUserEvent = (email, password, successEvent, errorEvent) => dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( result => {
        console.log(result.user)
        dispatch({
            type: 'LOGIN',
            data : result.user
        });

        successEvent();
    })
    .catch(error => {
        errorEvent(error);
    });
};
  

export const loginUserEvent = (
    email,
    password,
    successEvent,
    errorEvent
    ) => dispatch => {
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => {
            console.log(data.user);
            dispatch({
            type: "LOGIN",
            user: data.user
            });
            successEvent();
        })
        .catch(error => {
            errorEvent(error);
        });
    }
  

export const updateUser = (user, user_id) => dispatch => {
    
    firebase.firestore().collection('User').doc(user_id)
    .update(user)
    .then( (data) => {
        dispatch({
            type: 'UPDATE_USER',
            user: user
        })
    })
  }

export const signOutEvent = (cb) => dispatch => {
    firebase.auth().signOut().then(() => {
      dispatch({
        type: 'LOGOUT'
      });
      cb();
    })
  }
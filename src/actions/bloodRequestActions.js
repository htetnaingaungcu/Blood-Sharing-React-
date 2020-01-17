import {retrieveData,storeData} from "../utilites/localStorage";
import firebase from '../utilites/firebase';

export const fetchBloodRequests = () => dispatch => {
  const bloodRequests = [];
  const getRequests = firebase.firestore().collection('Request_User').get();

  getRequests.then( (snapshot) => {
    snapshot.docs.forEach( item => {
        const request = item.data();
        request.id = item.id;
        bloodRequests.push(request);
    });
    dispatch({
        type: 'FETCH_REQUEST',
        data: bloodRequests
    });
  }) 
}

export const fetchRequestByBloodType = (bloodType) => dispatch => {
  const bloodRequests = [];
  firebase.firestore().collection('Request_User').where('bloodType', '==', bloodType).get()
  .then(snapshot => {
    snapshot.docs.forEach( item => {
      const request = item.data();
      request.id = item.id;
      bloodRequests.push(request);
    });

    dispatch({
      type: 'FETCH_ALL_REQUEST',
      data: bloodRequests
    });

  });
}

export const insertBloodRequest = (bloodRequest) => dispatch => { 
      
    firebase.firestore().collection('Request_User').add(bloodRequest)
    .then( (data) => {
      bloodRequest.id = data.id;
      dispatch({
        type: 'ADD_NEW_BLOOD_REQUEST',
        data : bloodRequest
      });
    });

  };

export const insertDonorList = (request_id, user_id, userData) => dispatch => {
  firebase.firestore().collection('Request_User').doc(request_id).collection('Donor').doc(user_id).set(userData)
  .then( (data) => {
    console.log(data)
    dispatch({
      type: 'ADD_DONOR_LIST',
      data: userData
    })
  })
}

export const fetchRequestByUID = (uid) => dispatch => {
  firebase.firestore().collection('Request_User').where('uid', '==', uid).get()
  .then(snapshot => {
    snapshot.docs.forEach( item => {
      const request = item.data();
      dispatch({
        type: 'FETCH_REQUEST_BY_UID',
        data: request
      });
    });   
  });
}

export const fetchDonorList = (request_id) => dispatch => {

  const donors = [];
  firebase.firestore().collection('Request_User').doc(request_id).collection('Donor').get()
  .then( subCollectionDocs => {
      subCollectionDocs.docs.forEach( doc => {
          const donor_id = doc.id;
          const donor = doc.data();
          donors.push(donor);
          //console.log("donorArrList",donors)     
      })
      dispatch({
        type: 'FETCH_DONOR_LIST',
        data: donors
      })
  })
}
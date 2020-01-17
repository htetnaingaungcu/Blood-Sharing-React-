import {retrieveData,storeData} from "../utilites/localStorage";
import firebase from '../utilites/firebase';

export const insertDonor = (donor) => dispatch => {

    firebase.firestore().collection('Donor').add(donor)
    .then( (data) => {
        dispatch({
            type: 'ADD_NEW_DONOR',
            data : donor
        });
    });

    // firebase.firestore().collection('User').doc(user.id).get().then( (data) =>{
    //     console.log(data.data())
    // })
    // firebase.firestore().collection('User').doc(user.id)
    // .update(user)
    // .then( (data) => {
    //     dispatch({
    //         type: 'UPDATE_USER',
    //         user: user
    //     })
    // })
  };

export const fetchDonors = () => dispatch => {
    const donors = [];
    const getDonors = firebase.firestore().collection('Donor').get();

    getDonors.then( (snapshot) => {
        snapshot.docs.forEach( item => {
            const donor = item.data();
            donor.id = item.id;
            donors.push(donor);
        });
        dispatch({
            type: 'FETCH_DONOR',
            data: donors
        });
    })
}


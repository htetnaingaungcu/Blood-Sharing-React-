import {combineReducers} from 'redux';
import users from './users';
import currentUser from './currentUser';
import bloodRequests from './bloodRequests';
import donors from './donors';

export default combineReducers({users,currentUser,bloodRequests,donors});
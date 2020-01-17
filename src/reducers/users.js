const users = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return action.payload;
   
        case 'FETCH_USER_BY_UID':
            return action.payload;

        case 'UPDATE_USER' :
            return [
              ...state.filter(item => item.id !== action.user.id),
              action.user
            ]

        case 'ADD_NEW_USER':
            return [
                ...state,
                {
                    bloodType: action.data.bloodType,
                    chatroom: action.data.chatroom,
                    dateOfBirth: action.data.dateOfBirth,
                    gender: action.data.gender,
                    latestDonatedDate: action.data.latestDonatedDate,
                    location: action.data.location,
                    phone: action.data.phone,
                    uid: action.data.uid,
                    username: action.data.username,
                    weight: action.data.weight
                }
            ]
        default: 
            return state
    }
}

export default users;
const bloodRequests = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return action.data

        case 'FETCH_ALL_REQUEST':
            return action.data

        case 'FETCH_DONOR_LIST':
            return action.data

        case 'FETCH_REQUEST_BY_UID':
            return [
                ...state,
                {
                    id: action.data.id,
                    name: action.data.name,
                    bloodType: action.data.bloodType,
                    phone: action.data.city,
                    location: action.data.location,
                    reason: action.data.reason, 
                    created_by : action.data.created_by               
                }
            ]
    
            
        case 'ADD_NEW_BLOOD_REQUEST':
            return [
                ...state,
                {
                    id: action.data.id,
                    name: action.data.name,
                    bloodType: action.data.bloodType,
                    phone: action.data.city,
                    location: action.data.location,
                    reason: action.data.reason, 
                    created_by : action.data.created_by               
                }
            ]
        default: 
            return state
    }
}

export default bloodRequests;
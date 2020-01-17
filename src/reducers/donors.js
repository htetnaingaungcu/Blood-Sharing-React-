const donors = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_DONOR':
            return action.data
            
        case 'ADD_NEW_DONOR':
            return [
                ...state,
                {
                    id: action.data.id,
                    udid: action.data.uid,
                    username: action.data.username             
                }
            ]
        
        default: 
            return state
    }
}

export default donors;
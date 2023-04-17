import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './userTypes'
import axios from 'axios'


function fetchUsersRequest(){
    
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users)=>{
    
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = (error)=>{
    
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () =>{
    return (dispatch)=>{
        
        dispatch(fetchUsersRequest())
        
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            dispatch(fetchUsersSuccess(response.data))
        })
        .catch(error=>{
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

export default {fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure, fetchUsers}
// export default {fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure}
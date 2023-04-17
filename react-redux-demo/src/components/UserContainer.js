import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchUsersRequest } from '../Redux/Sagas/userSaga'
import {fetchUsers} from '../Redux/user/userActions'

function UserContainer({userData, fetchUsers}) {
    
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return userData.loading ? (
        <h4>Loading</h4>) : userData.error ? (
            <p>{userData.error}</p>
        ): <div>
            <h2>User List</h2>
            <div>
                {
                    userData && userData.users && userData.users.map(user=><p>{user.email}</p>)
                }
            </div>
        </div>
}

const mapStateTooProps = state =>{
    return{
        userData: state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return{
         fetchUsers: ()=> dispatch(fetchUsers())
        // fetchUsers: ()=> dispatch(fetchUsersRequest())
    }
}

export default connect(mapStateTooProps, mapDispatchToProps)(UserContainer)

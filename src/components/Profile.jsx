import React, {useContext, useState} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
  const {user}= useContext({useContext})
 if (!user) return <div>Please login </div> 
  
 return <div>Welcome {user.username}</div>
}

export default Profile
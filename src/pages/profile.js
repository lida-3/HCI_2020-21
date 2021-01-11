import React, {useState} from 'react'
 
import {navigate} from 'gatsby'
import {myLocalStorage} from '../helper'
 
const Profile = () => {
  const [user, setUser] = useState(myLocalStorage.getItem('loggedIn'))
 
  if (!user) {
    
    return <p>
      You cannot view this page without login! 
    </p>
  }
 
  return (
    <main>
      You are logged in as {user}
    </main>
  )
}
 
export default Profile
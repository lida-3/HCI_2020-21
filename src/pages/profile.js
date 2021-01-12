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
  else {
    setTimeout(() => navigate('/naslovnica'), 1000)
    return (
        <main>
        Dobrodošli nazad, {user}!
        </main>
    )
  }
}
 
export default Profile
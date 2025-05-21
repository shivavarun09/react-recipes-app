import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './profile.css'
const Profile = () => {
  const navigate = useNavigate()
  const [profile,setProfile] =useState({
    name:"Login First",
    email:"Login First",
    role:"Login First"
  })
  const [islogin,setIsLogin] =useState(true)
useEffect(()=>{
    let userProfile = JSON.parse(localStorage.getItem("LoggedInUserDetails"));
  // console.log(userProfile)
  if(userProfile){
    setIsLogin(false)
    setProfile({
    name:userProfile.name,
    email:userProfile.email,
    role:userProfile.role
  })
  }else{
    setIsLogin(true)
  }
},[])

const handleLogout=()=>{
  let areYouSure =confirm(`${profile.name} are you sure want to logout`);
  if(areYouSure){
    setIsLogin(true)
      localStorage.removeItem("LoggedInUserDetails")

      setProfile({
    name:"Login First",
    email:"Login First",
    role:"Login First"
  })
  }
}

const handleLogin=()=>{
  alert("Redirecting to Login page")
  navigate('/login')
}
console.log(islogin)
  return (
    <div className='profile'>
      <div><img src="data:image/png;base64,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" alt="" /></div>
      <div>
    <p><strong>Name: </strong>{profile.name}</p>
    <p><strong>Email: </strong>{profile.email}</p>
    <p><strong>Role: </strong>{profile.role}</p>
    
    {islogin? <button onClick={handleLogin}>Login</button>: <button onClick={handleLogout}>Logout</button>}
    
      </div>
    
    </div>
  )
}

export default Profile

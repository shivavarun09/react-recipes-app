import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './RecipesLoginForm.css'

const RecipesLoginForm = () => {
  const navigate =useNavigate();
  const [loginDetails,setLoginDetails] = useState({
    email:"",
    password:""
  })
  useEffect(()=>{
  },[])
  const handleLogin=(e)=>{
e.preventDefault();
  let contributers = JSON.parse(localStorage.getItem("contributerDetails")) || [] ;
    let users = JSON.parse(localStorage.getItem("userDetails")) || [];
// console.log(users)
// console.log(contributers)
let allUsers = [...contributers,...users]
// console.log(allUsers)

let matchedUser = allUsers.find((machedUser)=>(machedUser.email === loginDetails.email && machedUser.password === loginDetails.password))
// console.log(matchedUser,"he is mathced user")
localStorage.setItem("LoggedInUserDetails",JSON.stringify(matchedUser))

if(matchedUser.role==='user'){
  alert(`Hello ${matchedUser.name} login Successfull... Redirecting to Recipes`)

navigate('/recipes')
}else if(matchedUser.role==='contributer'){
  alert(`Hello ${matchedUser.name} login Successfull... Redirecting to contributer dashboard`)
navigate('/contributerDashboard')
}
else{
  alert("user not found")
}
  }
  return (
    <div className='LoginForm'>
        
      <form onSubmit={handleLogin}>
      <h3>Login Here</h3>
<input type="text" placeholder='Enter Email' name="email" id="email" required onChange={(e)=>{setLoginDetails({...loginDetails,email:e.target.value})}}/> <br />
<input type="password" placeholder='Enter password' name="password" id="password" required onChange={(e)=>{setLoginDetails({...loginDetails,password:e.target.value})}}/> <br />
<button type='submit' >Login</button>
<p>Don't have accout <span style={{color:"red",cursor:"pointer"}} onClick={()=>{navigate('/signup')}}>Signup</span></p>
      </form>
    </div>
  )
}



export default RecipesLoginForm

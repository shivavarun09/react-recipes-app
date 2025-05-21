import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './RecipesSignupForm.css'

const RecipesSignupForm = () => {
  const navigate = useNavigate()
  const [recipeSignupData,setRecipesSignupData]=useState({
    name:"",
    email:"",
    password:"",
    role:""
  })
  const handleSignupData=(e)=>{
    e.preventDefault()
    // console.log(recipeSignupData)
    if(recipeSignupData.role==='user'){
let userSignupDetails = JSON.parse(localStorage.getItem("userDetails")) || [];
userSignupDetails.push(recipeSignupData)
localStorage.setItem("userDetails",JSON.stringify(userSignupDetails))
// console.log("user Role Array",userSignupDetails)
alert(`${recipeSignupData.name} registration successfull.. redirecting to login`)
navigate('/login')
    }
    else if(recipeSignupData.role==='contributer'){
let contributerSignupDetails = JSON.parse(localStorage.getItem("contributerDetails")) || [];
contributerSignupDetails.push(recipeSignupData)
localStorage.setItem("contributerDetails",JSON.stringify(contributerSignupDetails))
// console.log("contributer Role Array",contributerSignupDetails)
alert(`${recipeSignupData.name} registration successfull... redirecting to login`)
navigate('/login')

    }
    else{
      alert("select your role")

    }
  }
  return (
    <div className="signup-container">
    
      <form onSubmit={handleSignupData}>
        <h3>Register Here</h3>
<input type="text" name="name" required id="username" placeholder='Enter Name' onChange={(e)=>{setRecipesSignupData({...recipeSignupData,name:e.target.value})}}/> <br/>
<input type="email" name="email" required id="useremail" placeholder='Enter Email' onChange={(e)=>{setRecipesSignupData({...recipeSignupData,email:e.target.value})}}/> <br/>
<input type="password" name="password" required id="userpassword" placeholder='Enter Password' onChange={(e)=>{setRecipesSignupData({...recipeSignupData,password:e.target.value})}}/> <br/>
<select name="role" id="userrole" required onChange={(e)=>{setRecipesSignupData({...recipeSignupData,role:e.target.value})}}>
  <option value="selectrole">Select role</option>
  <option value="user">user</option>
  <option value="contributer">contributer</option>
</select> <br />
<button type='submit'>Register</button>
<p>Already have an account <span style={{color:"green",cursor:"pointer"}} onClick={()=>{navigate('/login')}}>Login</span></p>
      </form>
    </div>
  )
}

export default RecipesSignupForm

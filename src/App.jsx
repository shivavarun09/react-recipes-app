import React, { useState,useEffect} from 'react'
import Navbarr from './Componets/Navbarr/Navbarr'
import { Route,Routes } from 'react-router-dom'
import Recipes from './Componets/Recipes/Recipes'
import FevouriteRecipes from './Componets/FevouriteRecipes/FevouriteRecipes'
import Home from './Componets/Home/Home'
import axios from 'axios'
import NotFound from './Componets/NotFound/NotFound'
import SingleRecipeDetails from './Componets/SingleRecipeDetailsPage/SingleRecipeDetailsPage'
import Footer from './Componets/Footer/Footer'
import RecipesSignupForm from './Componets/RecipesSignupForm/RecipesSignupForm'
import RecipesLoginForm from './Componets/RecipesLoginForm/RecipesLoginForm'
import Profile from './Componets/Profile/Profile'
import ContributerDashboard from './Componets/ContributerDashboard/ContributerDashboard'

const App = () => {
    const [recipesApiData,setApiData]= useState([]);
  useEffect(()=>{
    let recipesUrl = "https://dummyjson.com/recipes"; 
    axios.get(recipesUrl).then(res=>{
      // console.log(res.data.recipes)
      let recipesData =res.data.recipes  //destructuring 
      setApiData(recipesData)
    })
  },[])
  return (
    <div>
      {/* <RecipesSignupForm/> */}
      <Navbarr/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<RecipesSignupForm/>} />
        <Route path='/login' element={<RecipesLoginForm/>} />
        <Route path='/contributerDashboard' element={<ContributerDashboard/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/recipes'  element={<Recipes singleRecipe={recipesApiData}/>} />
        <Route path='/recipes/:id'  element={<SingleRecipeDetails singleRecipe={recipesApiData}/>} />
        <Route path='/fevourites' element={<FevouriteRecipes/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

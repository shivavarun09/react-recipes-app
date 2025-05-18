import React, { useState,useEffect} from 'react'
import Navbarr from './Componets/Navbarr/Navbarr'
import { Route,Routes } from 'react-router-dom'
import Recipes from './Componets/Recipes/Recipes'
import FevouriteRecipes from './Componets/FevouriteRecipes/FevouriteRecipes'
import Home from './Componets/Home/Home'
import axios from 'axios'
import NotFound from './Componets/NotFound/NotFound'
import SingleRecipeDetails from './Componets/SingleRecipeDetailsPage/SingleRecipeDetailsPage'
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
      <Navbarr/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipes'  element={<Recipes singleRecipe={recipesApiData}/>} />
        <Route path='/recipes/:id'  element={<SingleRecipeDetails singleRecipe={recipesApiData}/>} />
        <Route path='/fevourites' element={<FevouriteRecipes/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App

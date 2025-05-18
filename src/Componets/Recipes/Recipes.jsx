import React, { useState } from 'react'
import {Card,Button} from 'react-bootstrap'
import './Recipes.css'
import { useNavigate } from 'react-router-dom'
const Recipes = ({singleRecipe}) => {
const navigate = useNavigate();
const [fevMessage,setFevMessage]=useState("");
// const [seletedCartRacipe,setSelecetdCartRacipe]=useState(singleRecipe);
// console.log(singleRecipe)
const handelFavourites=(selectedRecipeCart)=>{
  console.log(selectedRecipeCart)
  let recipesFevArray =JSON.parse(localStorage.getItem("FevRecipes")) || [];

  let recipeExisted = recipesFevArray.some((x)=>x.id === selectedRecipeCart.id)

  if(!recipeExisted){
  recipesFevArray.push(selectedRecipeCart)
  localStorage.setItem("FevRecipes",JSON.stringify(recipesFevArray))
  // console.log(recipesFevArray)
  setFevMessage("Recipe added to Fevourites❤️")
  }
  else{
    setFevMessage("Recipe already added to Fevourites❤️")
  }
}
setTimeout(()=>{
  setFevMessage("")
},500)
  return (
    <div className='CardsGrid'>
    <p style={{color:"green", position:"sticky",top:"45vh",zIndex:"99",backgroundColor:"white",padding:"0.2rem",borderRadius:"2%",fontSize:"18px"}}>{fevMessage}</p>

      <h4 style={{textAlign:'center',marginTop:'0'}}>🔥👨‍🍳 Explore All Recipes – Cook, Eat & Repeat! 🍲🍛</h4>
  {singleRecipe.map((x, index) => (
<Card key={index}>
  <Card.Img variant="top" src={x.image} loading=''/>
  <Card.Body>
    <Card.Title>{x.name}</Card.Title>

    <Card.Text>
      <strong>Cuisine:</strong> {x.cuisine}<br />
      <strong>Tags:</strong> {x.tags.map((tag, i) => (
        <span key={i} style={{ marginRight: '5px', padding: '2px 6px', backgroundColor: '#eee', borderRadius: '5px' }}>{tag}</span>
      ))}<br />
      <strong>Rating:</strong> ⭐ {x.rating} ({x.reviewCount} reviews)<br />
      <strong>Difficulty:</strong>  {x.difficulty}
    </Card.Text>
<div style={{display:"flex",gap:"4px"}}>

  <Button variant="primary" onClick={() => navigate(`/recipes/${x.id}`)}>
      View Details
    </Button>
  
    <Button variant="primary" onClick={() => handelFavourites(x)}>
      ❤️
    </Button></div>
    
  </Card.Body>
</Card>

))}

    </div>
  )
}

export default Recipes

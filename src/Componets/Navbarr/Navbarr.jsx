import React, { useEffect, useState } from 'react'
import {Navbar,Container,Nav,Button,Badge} from 'react-bootstrap'
import './Navbarr.css'
import {Link} from 'react-router-dom'
const Navbarr = () => {
    const [fevCount,setFevCount]=useState();
useEffect(()=>{
  let recipesFevArray =JSON.parse(localStorage.getItem("FevRecipes")) || [];
  let count = recipesFevArray.length;
setFevCount(count)
  // console.log(count)
},[])

  return (
    <div className='Navbar_main'>
    
      <Navbar bg="primary" data-bs-theme="dark" className=''>
        <Container >
          <Link className='Navbar-linnks' to='/'>Home</Link>
          <Nav className="ms-auto">
            <Link className='Navbar-linnks' to='/signup'>SignUp</Link>
            <Link className='Navbar-linnks' to='/profile'>Profile</Link>
            <Link className='Navbar-linnks' to='/fevourites'> 
            <div style={{ position: "relative" }}>
                <span style={{ 
                  position: "absolute", 
                  top: "-8px", 
                  right: "-5px", 
                  color: "white", 
                  fontSize: "10px" 
                }}>
                  {fevCount}
                </span>Fevourites❤️
              </div>
    </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarr


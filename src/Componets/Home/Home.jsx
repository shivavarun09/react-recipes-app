import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h5 className="home-heading">🍽️ Welcome to RecipesApp! 👨‍🍳</h5>
      <p className="home-paragraph">
        Hey there, foodie! 👋 I'm Varun, and I'm super excited to share my collection of delicious recipes with you. 🥗🍜🍰
        Whether you're a beginner or a kitchen pro, there's something here to spice up your day! 🌶️
        Let’s cook, create, and enjoy together! 🍳❤️
      </p>
      <p className="home-paragraph">
        👇 Click the button below to explore all our delicious recipes! 🍽️
        Let’s cook, create, and enjoy together! ❤️
      </p>
      <Link to='/recipes' className='expolrealllink'>
        <button className="explore-button">Explore All Recipes</button>
      </Link>
      <p>Get ready to dive into flavors from around the world, with easy-to-follow steps and tips to make every dish shine. From quick weeknight dinners to decadent desserts, there’s a recipe for every craving and occasion. So grab your apron, sharpen those knives, and let’s turn your kitchen into a flavor paradise! 🌍🍲✨</p>
    </div>
  );
};

export default Home;

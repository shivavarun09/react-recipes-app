import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUserDetails"));
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="home-container">
      <h5 className="home-heading">🍽️ Welcome to RecipesApp! 👨‍🍳</h5>
      <p className="home-paragraph">
        Hey there, foodie! 👋 I'm Varun, and I'm super excited to share my collection of delicious recipes with you. 🥗🍜🍰
        Whether you're a beginner or a kitchen pro, there's something here to spice up your day! 🌶️
        Let’s cook, create, and enjoy together! 🍳❤️
      </p>
      <p className="home-paragraph">
        ❤️ Click the button below to explore all our delicious recipes! 🍽️
        Let’s cook, create, and enjoy together! 👇
      </p>

      <Link to={isLoggedIn ? '/recipes' : '/login'} className='explorealllink'>
        <button className="explore-button">
          {isLoggedIn ? 'Explore All Recipes' : 'Login to Explore'}
        </button>
      </Link>

      <p>
        Get ready to dive into flavors from around the world, with easy-to-follow steps and tips to make every dish shine.
        From quick weeknight dinners to decadent desserts, there’s a recipe for every craving and occasion.
        So grab your apron, sharpen those knives, and let’s turn your kitchen into a flavor paradise! 🌍🍲✨
      </p>
    </div>
  );
};

export default Home;

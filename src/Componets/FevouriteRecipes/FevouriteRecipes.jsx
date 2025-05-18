import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FevouriteRecipes = () => {
  const navigate = useNavigate();

  // Use state to re-render UI on update
  const [recipesFevArray, setRecipesFevArray] = useState([]);

  // Load data from localStorage once when component mounts
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("FevRecipes")) || [];
    setRecipesFevArray(storedFavs);
  }, []);

  const deleteFav = (selectedDelRec) => {
    // Filter out the item to delete
    const updatedFavs = recipesFevArray.filter((item) => item.id !== selectedDelRec.id);

    // Update state and localStorage
    setRecipesFevArray(updatedFavs);
    localStorage.setItem("FevRecipes", JSON.stringify(updatedFavs));
  };

  return (
    <div style={{padding:"1rem"}}>
      <h1 style={{textAlign:"center"}}>Favourites❤️ </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Recipe Name</th>
            <th>Image</th>
            <th>Actions</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {recipesFevArray.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>No favourite recipes found.</td>
            </tr>
          ) : (
            recipesFevArray.map((x, i) => (
              <tr key={x.id}>
                <td>{i + 1}</td>
                <td>{x.name}</td>
                <td><img src={x.image} alt="" style={{ width: "50px", height: "50px" }} /></td>
                <td>
                  <Button variant="info" onClick={() => navigate(`/recipes/${x.id}`)}>View Details</Button>
                </td>
                <td>
                  <Button variant="danger" onClick={() => deleteFav(x)}>Delete</Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default FevouriteRecipes;

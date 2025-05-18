import React from "react";
import { useParams } from "react-router-dom";
import "./SingleRecipeDetailsPage.css";
const SingleRecipeDetailsPage = ({ singleRecipe }) => {
  const { id } = useParams();
  const selectedRecipe = singleRecipe.find((x) => x.id === Number(id));
  // console.log(selectedRecipe);
  // console.log(selectedRecipe.ingredients);
  return (
    <div className="DetailsContainer">
      <h3 style={{textAlign:'center',fontFamily:"cursive",marginBottom:"8p"}}>{selectedRecipe.name}</h3>

      <div className="Detaisldiv">
        <div>
          <img style={{ width: "100%" }} src={selectedRecipe.image} alt="" />
        </div>
        <div className="recipe-info">
           <h4>🕒 Recipe Info</h4>
        <p><strong>Prep Time:</strong> {selectedRecipe.prepTimeMinutes} minutes</p>
        <p><strong>Cook Time:</strong> {selectedRecipe.cookTimeMinutes} minutes</p>
        <p><strong>Servings:</strong> {selectedRecipe.servings}</p>
        <p><strong>Calories/Serving:</strong> {selectedRecipe.caloriesPerServing}</p>
        <p><strong>Difficulty:</strong> {selectedRecipe.difficulty}</p>
        <p><strong>Cuisine:</strong> {selectedRecipe.cuisine}</p>
        <p><strong>Rating:</strong> ⭐ {selectedRecipe.rating} ({selectedRecipe.reviewCount} reviews)</p>
        <p><strong>Tags:</strong> {selectedRecipe.tags.join(", ")}</p>
        <p><strong>Meal Type:</strong> {selectedRecipe.mealType.join(", ")}</p>
        </div>
        
</div>
<div>

    <h4 style={{textAlign:"center",marginTop:"8px"}}>🛒🥕 Ingredients</h4>
          {selectedRecipe.ingredients.map((x, i) => {
            return (
              <>
                <ul key={i}>
                  <li style={{margin:"0",padding:"0"}}>{x}</li>
                </ul>
              </>
            );
          })}
          <h4 style={{ textAlign: "center" }}>📋 Instructions</h4>
<ol>
  {selectedRecipe.instructions.map((x, i) => (
    <li key={i} style={{ margin: "0", padding: "0" }}>{x}</li>
  ))}
</ol>

        </div>
      </div>
    
  );
};

export default SingleRecipeDetailsPage;





// import React from "react";
// import { useParams } from "react-router-dom";
// import "./SingleRecipeDetailsPage.css";

// const SingleRecipeDetailsPage = ({ singleRecipe }) => {
//   const { id } = useParams();
//   const selectedRecipe = singleRecipe.find((x) => x.id === Number(id));

//   if (!selectedRecipe) {
//     return <h3 style={{ textAlign: "center", marginTop: "20px" }}>Recipe not found</h3>;
//   }

//   return (
//     <div className="recipe-container">
//       <h2 className="recipe-title">{selectedRecipe.name}</h2>

//       <div className="details-layout">
//         <div className="image-section">
//           <img src={selectedRecipe.image} alt={selectedRecipe.name} />
//         </div>

//         <div className="text-section">
//           <div className="info-box">
//             <h4>🍽 Ingredients</h4>
//             <ul>
//               {selectedRecipe.ingredients.map((ingredient, index) => (
//                 <li key={index}>{ingredient}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="info-box">
//             <h4>🧑‍🍳 Instructions</h4>
//             <ol>
//               {selectedRecipe.instructions.map((instruction, index) => (
//                 <li key={index}>{instruction}</li>
//               ))}
//             </ol>
//           </div>

//           <div className="info-box">
//             <h4>🕒 Recipe Info</h4>
//             <p><strong>Prep Time:</strong> {selectedRecipe.prepTimeMinutes} minutes</p>
//             <p><strong>Cook Time:</strong> {selectedRecipe.cookTimeMinutes} minutes</p>
//             <p><strong>Servings:</strong> {selectedRecipe.servings}</p>
//             <p><strong>Calories/Serving:</strong> {selectedRecipe.caloriesPerServing}</p>
//             <p><strong>Difficulty:</strong> {selectedRecipe.difficulty}</p>
//             <p><strong>Cuisine:</strong> {selectedRecipe.cuisine}</p>
//             <p><strong>Rating:</strong> ⭐ {selectedRecipe.rating} ({selectedRecipe.reviewCount} reviews)</p>
//             <p><strong>Tags:</strong> {selectedRecipe.tags.join(", ")}</p>
//             <p><strong>Meal Type:</strong> {selectedRecipe.mealType.join(", ")}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleRecipeDetailsPage;

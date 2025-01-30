// import React, { useContext } from "react";
// import RecipeContext from "../RecipeContext";

// const RecipeList = () => {
//   const { recipes, search, addFavorite } = useContext(RecipeContext);

//   const filteredRecipes = recipes.filter((recipe) =>
//     recipe.label.toLowerCase().includes(search)
//   );

//   return (
//     <div>
//       <h2>Recipes</h2>
//       <div className="recipe-list">
//         {filteredRecipes.map((recipe) => (
//           <div key={recipe.uri} className="recipe-card">
//             <img src={recipe.image} alt={recipe.label} />
//             <h3>{recipe.label}</h3>
//             <button onClick={() => addFavorite(recipe)}>❤️ Save</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecipeList;

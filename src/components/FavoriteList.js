// import React, { useContext } from "react";
// import RecipeContext from "../RecipeContext";

// const FavoriteList = () => {
//   const { favorites, removeFavorite } = useContext(RecipeContext);

//   return (
//     <div>
//       <h2>Favorites</h2>
//       <div className="recipe-list">
//         {favorites.length === 0 ? <p>No favorite recipes yet.</p> : null}
//         {favorites.map((recipe) => (
//           <div key={recipe.uri} className="recipe-card">
//             <img src={recipe.image} alt={recipe.label} />
//             <h3>{recipe.label}</h3>
//             <button onClick={() => removeFavorite(recipe.uri)}>❌ Remove</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FavoriteList;

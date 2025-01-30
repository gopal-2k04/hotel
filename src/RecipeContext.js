// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// const RecipeContext = createContext();

// const API_URL =
//   "https://api.edamam.com/search?q=pizza&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=20";

// export const RecipeProvider = ({ children }) => {
//   const [recipes, setRecipes] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.get(API_URL);
//        console.log(response);
       
//       } catch (error) {
//         console.error("Error fetching recipes", error);
//       }
//     };
//     fetchRecipes();
//   }, []);

//   const addFavorite = (recipe) => {
//     setFavorites([...favorites, recipe]);
//   };

//   const removeFavorite = (recipeUri) => {
//     setFavorites(favorites.filter((recipe) => recipe.uri !== recipeUri));
//   };

//   return (
//     <RecipeContext.Provider
//       value={{ recipes, favorites, addFavorite, removeFavorite, search, setSearch }}
//     >
//       {children}
//     </RecipeContext.Provider>
//   );
// };

// export default RecipeContext;

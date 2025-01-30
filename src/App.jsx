import React, { useEffect, useState } from "react";
import axios from "axios";
import "../src/App.css"

const API_URL = "https://dummyjson.com/recipes";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

 

  // If loading, show a loading message
const API_URL = "https://dummyjson.com/recipes";

useEffect(()=>{
  const connect = async()=>{
    try{
    
      const responce = await axios.get(API_URL);
      setRecipes(responce.data.recipes);
    }catch(error){
      console.log("error");
      
    }finally{
      setLoading(false);
    }

  }
  connect()


},[]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Function to render the stars based on rating
  const renderStars = (rating) => {
    const maxRating = 5; // Max rating of 5 stars
    let stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="container">
      <h1 className="text-center text-3xl font-bold mb-10">🍕 Recipe List</h1>
      <div className="recipe-cards-container">
        {recipes.map((item, key) => (
          <div key={key} className="recipe-card">
            <img src={item.image} alt={item.name} className="recipe-image" />
            <p className="recipe-name">{item.name}</p>
            <div className="rating">
              {renderStars(item.rating || 0)} 
            </div>
            <p>User Rating: {item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

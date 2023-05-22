import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '/Users/riyaalexander/Documents/Pursuit/Mod/foodies-unite-fe/src/Styles/RecipeDetails.css';



const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${API}/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipe();
  }, [id, API]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="RecipeDetails">
      <h2 className="RecipeDetails__title">{recipe.title}</h2>
      <img src={recipe.image_url} alt={recipe.title} className="RecipeDetails__image" />
      <div className="RecipeDetails__info">
        <div className="RecipeDetails__info-item">Description: {recipe.description}</div>
        <div className="RecipeDetails__info-item">Ingredients: {recipe.ingredients}</div>
        <div className="RecipeDetails__info-item">Instructions: {recipe.instructions}</div>
        <div className="RecipeDetails__info-item">Preparation Time: {recipe.prep_time}</div>
        <div className="RecipeDetails__info-item">Difficulty: {recipe.difficulty}</div>
      </div>
    </div>
  );
};

export default RecipeDetails;
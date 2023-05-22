import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '/Users/riyaalexander/Documents/Pursuit/Mod/foodies-unite-fe/src/Styles/RecipeDetails.css';

const RecipeDetails = ({ match }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`/recipes/${match.params.id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipe();
  }, [match.params.id]);

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

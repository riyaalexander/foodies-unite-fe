import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/riyaalexander/Documents/Pursuit/Mod/foodies-unite-fe/src/Styles/RecipeCard.css';


const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.id}`}>
        <img src={recipe.image_url} alt={recipe.title} className="recipe-card__image" />
      </Link>
    </div>
  );
};

export default RecipeCard;

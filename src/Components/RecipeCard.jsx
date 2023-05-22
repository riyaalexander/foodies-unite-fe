import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/riyaalexander/Documents/Pursuit/Mod/foodies-unite-fe/src/Styles/RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="RecipeCard">
      <Link to={`/recipes/${recipe.id}`}>
        <img src={recipe.image_url} alt={recipe.title} className="RecipeCard__image" />
      </Link>
      <h3 className="RecipeCard__title">{recipe.title}</h3>
      <p className="RecipeCard__description">{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;

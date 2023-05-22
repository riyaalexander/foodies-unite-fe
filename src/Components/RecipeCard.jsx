import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="RecipeCard">
      <Link to={`/recipes/${recipe.id}`}>
        <img src={recipe.image_url} alt={recipe.title} className="RecipeCard__image" />
      </Link>
    </div>
  );
};

export default RecipeCard;

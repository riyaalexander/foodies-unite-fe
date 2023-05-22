import React, { useEffect, useState } from 'react';
import RecipeCard from '../Components/RecipeCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/recipes`)
      .then((response) => setRecipes(response.data))
      .catch((error) => console.warn("Error", error));
  }, []);

  return (
    <div className="home">
      <section className="recipe-cards">
        <h2>Featured Recipes</h2>
        <div className="card-container">
          {recipes.map((recipe) => (
            <Link to={`/recipes/${recipe.id}`} key={recipe.id} className="recipe-link">
            <RecipeCard recipe={recipe} />
          </Link>          
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

import React from 'react';
import RecipeCard from '../Components/RecipeCard';
import Navbar from '../Components/Navbar';
import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/recipes`)
      .then((response) => setRecipes(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
console.log(recipes);
  return (
    <div className="home">
      <Navbar /> {Navbar}
      <section className="recipe-cards">
        <h2>Featured Recipes</h2>
        <div className="card-container">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

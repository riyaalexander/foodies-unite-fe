import React from 'react';
import RecipeCard from '../Components/RecipeCard';
import Navbar from '../Components/Navbar';
import '../Styles/Home.css';

const Home = () => {
  const recipes = [
    // Example recipe data
    { id: 1, title: 'Chocolate Chip Cookies', image: 'https://pinchofyum.com/wp-content/uploads/Chocolate-Chip-Cookies-Recipe.jpg' },
    { id: 2, title: 'Omelette', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/02/Omelette-007.jpg' },
    { id: 3, title: 'Oatmeal', image: 'https://oneinthekitchen.com/wp-content/uploads/2019/02/Classic-Oatmeal-With-Milk.jpg' },
    { id: 4, title: 'Grilled Cheese', image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/01/grilled-cheese-sandwich.jpg' },
    { id: 5, title: 'Bahn Mi', image: 'https://www.allrecipes.com/thmb/ieRkFw0X8NX5nzZcOVSPHL2ElOU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/roasted-pork-banh-mi-vietnamese-sandwitch-ddmfs-3X4-0332-cfb4d2e149e7476ab2a2b4030c543f1b.jpg' },
    { id: 6, title: 'Chicken Noodle Soup', image: 'https://www.averiecooks.com/wp-content/uploads/2015/09/chickennoodlesoup-5.jpg' },
    { id: 7, title: 'Crispy Fried Chicken', image: 'https://iwashyoudry.com/wp-content/uploads/2021/06/Crispy-Fried-Chicken-Recipe-6.jpg' },
    { id: 8, title: 'Penne alla Vodka', image: 'https://thecozycook.com/wp-content/uploads/2023/01/Penne-Alla-Vodka-1-.jpg' },
    { id: 9, title: 'Lemon Herb Roasted Chicken', image: 'https://s23209.pcdn.co/wp-content/uploads/2018/06/211129_DAMN-DELICIOUS_Lemon-Herb-Roasted-Chx_059.jpg' },
    { id: 10, title: 'Beef Stir-Fry with Vegetables', image: 'https://cdn.momsdish.com/wp-content/uploads/2021/07/Steak-Stir-Fry-Recipe-014-1200x1800.jpg' }
  ];

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

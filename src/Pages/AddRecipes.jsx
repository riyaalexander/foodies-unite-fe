import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/AddRecipes.css';

// POST
const AddRecipes = () => {
  const [formData, setFormData] = useState({
    title: '',
    image_url: '',
    description: '',
    ingredients: '',
    instructions: '',
    prep_time: '',
    difficulty: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5500/recipes', formData);
      console.log(response.data);
      // Reset the form data
      setFormData({
        title: '',
        image_url: '',
        description: '',
        ingredients: '',
        instructions: '',
        prep_time: '',
        difficulty: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-recipes-container">
    <div className="form-container">
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />

        <label htmlFor="image_url">Image URL:</label>
        <input type="text" id="image_url" name="image_url" value={formData.image_url} onChange={handleChange} />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} />

        <label htmlFor="ingredients">Ingredients:</label>
        <textarea id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleChange} />

        <label htmlFor="instructions">Instructions:</label>
        <textarea id="instructions" name="instructions" value={formData.instructions} onChange={handleChange} />

        <label htmlFor="prep_time">Preparation Time:</label>
        <input type="text" id="prep_time" name="prep_time" value={formData.prep_time} onChange={handleChange} />

        <label htmlFor="difficulty">Difficulty:</label>
        <select id="difficulty" name="difficulty" value={formData.difficulty} onChange={handleChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button type="submit">Add Recipe</button>
      </form>
    </div>
    </div>
  );
};

export default AddRecipes;

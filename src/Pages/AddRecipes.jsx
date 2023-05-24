import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/AddRecipes.css';

const API = process.env.REACT_APP_API_URL;

const AddRecipes = () => {
  const initialFormData = {
    title: '',
    image_url: '',
    description: '',
    ingredients: '',
    instructions: '',
    prep_time: '',
    difficulty: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}/`, formData);
      console.log(response.data);
      // Reset the form data
      setFormData(initialFormData);
      navigate('/recipes'); // Navigate to the recipes page after successful submission
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData);
  };

  const handleEdit = () => {
    navigate('/edit'); // Navigate to the edit page
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
          <div className="button-container">
            <button type="submit">Add Recipe</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
            <button type="button" onClick={handleEdit}>Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipes;

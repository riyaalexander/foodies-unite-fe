import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    image_url: '',
    description: '',
    ingredients: '',
    instructions: '',
    prep_time: '',
    difficulty: ''
  });
  const [error, setError] = useState(null);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${API}/recipes/${id}`);
        setFormData({
          title: response.data.title,
          image_url: response.data.image_url,
          description: response.data.description,
          ingredients: response.data.ingredients,
          instructions: response.data.instructions,
          prep_time: response.data.prep_time,
          difficulty: response.data.difficulty,
        });
      } catch (error) {
        console.error(error);
        setError('Failed to fetch recipe. Please try again.');
      }
    };

    fetchRecipe();
  }, [id, API]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${API}/recipes/${id}`, formData);
      navigate(`/recipes/${id}`);
    } catch (error) {
      console.error(error);
      setError('Failed to update recipe. Please try again.');
    }
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />

        <label htmlFor="image_url">Image URL:</label>
        <input type="text" id="image_url" name="image_url" value={formData.image_url} onChange={handleChange} />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>

        <label htmlFor="ingredients">Ingredients:</label>
        <textarea id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleChange}></textarea>

        <label htmlFor="instructions">Instructions:</label>
        <textarea id="instructions" name="instructions" value={formData.instructions} onChange={handleChange}></textarea>

        <label htmlFor="prep_time">Preparation Time:</label>
        <input type="text" id="prep_time" name="prep_time" value={formData.prep_time} onChange={handleChange} />

        <label htmlFor="difficulty">Difficulty:</label>
        <select id="difficulty" name="difficulty" value={formData.difficulty} onChange={handleChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <div>
          {error && <p>{error}</p>}
        </div>
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipe;

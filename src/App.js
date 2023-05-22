import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import AddRecipes from './Pages/AddRecipes';
import Navbar from './Components/Navbar';
import RecipeDetails from './Pages/RecipeDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/add-recipes" element={<AddRecipes />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

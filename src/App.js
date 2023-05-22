import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import AddRecipes from './Pages/AddRecipes';
import Navbar from './Components/Navbar';


function App() {
  <div classname = "App">
  <Router>
      <Navbar />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/add-recipes" component={AddRecipes} />
        </main>
    </Router>
    </div>
};

export default App;

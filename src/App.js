import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import AddRecipes from './AddRecipes';
import Navbar from './Components/Navbar';


function App() {
  <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/add-recipes" component={AddRecipes} />
      </Switch>
    </Router>
};

export default App;

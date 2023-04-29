import React, {useEffect, useState} from 'react';
import './App.css';
import ReviewsContainer from './ReviewsContainer';
import {Route, Switch} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/reviews")
    .then(r => r.json())
    .then(movies => setMovies(movies))
  }, [])

  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/reviews">
          <ReviewsContainer movies={movies}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

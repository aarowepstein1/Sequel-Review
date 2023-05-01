import React, {useEffect, useState} from 'react';
import './App.css';
import ReviewsContainer from './ReviewsContainer';
import {Route, Switch} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import NewReview from './NewReview';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/reviews")
    .then(r => r.json())
    .then(movies => setMovies(movies))
  }, [])

  function handleAddReview(newReview) {
    setMovies([...movies, newReview])
  }  

  return (
    <div id='app'>
      <Navbar/>
      <Switch>
        <Route path="/reviews">
          <ReviewsContainer movies={movies}/>
        </Route>
        <Route path="/newReview">
          <NewReview onAddReview={handleAddReview}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

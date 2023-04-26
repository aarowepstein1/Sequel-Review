import React, {useEffect, useState} from 'react';
import './App.css';
import ReviewsContainer from './ReviewsContainer';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/reviews")
    .then(r => r.json())
    .then(movies => setMovies(movies))
  }, [])

  return (
    <div>
      <ReviewsContainer movies={movies}/>
      
    </div>
  );
}

export default App;

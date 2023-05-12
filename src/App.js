import './App.css';
import React, { useState } from 'react';
import AddMovieForm from './AddMovieForm.js';
import Movies from './Movies.js';
import OrderByAlphaButton from './OrderByAlphaButton'
import OrderByGradeButton from './OrderByGradeButton'

function MovieApplication() {
  const [movies, setMovies] = useState([]);

  const addMovie = (title, grade) => {
    const newMovie = { title, grade };
    setMovies([...movies, newMovie]); // create a new array with the existing movies and the new movie object
  };

  return (
    <div className="App">
      <AddMovieForm addMovie={addMovie} />

      <Movies movies={movies} />

      <OrderByAlphaButton />
      <OrderByGradeButton />
    </div>
  );
}

export default MovieApplication;

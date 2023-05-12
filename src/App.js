import './App.css';
import React, { useState } from 'react';
import AddMovieForm from './AddMovieForm.js';
import Movies from './Movies.js';
import OrderByAlphaButton from './OrderByAlphaButton'
import OrderByGradeButton from './OrderByGradeButton'

function MovieApplication() {
  return (
    <div className="App">
      <AddMovieForm />

      <Movies></Movies>

      <OrderByAlphaButton />
      <OrderByGradeButton />
    </div>
  );
}

export default MovieApplication;

import './App.css';
import React, { useState } from 'react';
import AddMovieForm from './AddMovieForm.js';
import Movies from './Movies.js';

function MovieApplication() {
  return (
    <div className="App">
      <AddMovieForm />

      <Movies></Movies>

    </div>
  );
}

export default MovieApplication;

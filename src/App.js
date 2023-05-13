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

  const removeMovie = (title) => {
    const updatedMovies = movies.filter((movie) => movie.title !== title); // get a list of movies excluding the one that doesn't meet the condition
    setMovies(updatedMovies);
    console.table(updatedMovies);
  };

  const sortMovies = (sortByValue) => {
    let sortedMovies;
    if (sortByValue === "title") {
      sortedMovies = [...movies].sort( (a, b) => a[sortByValue].localeCompare(b[sortByValue]) ); // sort movies in an alphabetic order
    } 
    else if (sortByValue === "grade") {
      sortedMovies = [...movies].sort( (a, b) => Number(b[sortByValue]) - Number(a[sortByValue]) ); // sort numbers in a descending order
    }
    setMovies(sortedMovies);
  };

  return (
    <div className="App">
      <AddMovieForm addMovie={addMovie} />

      <Movies movies={movies} removeMovie={removeMovie} />

      <OrderByAlphaButton onClick={() => sortMovies('title')} />
      <OrderByGradeButton onClick={() => sortMovies('grade')} />
    </div>
  );
}

export default MovieApplication;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Movie from './Movie'

function Movies({ movies, removeMovie }) {
    return (
        <div>
            <h1>Inlagda filmer</h1>
            <ul id="movie-list">
                {movies.map((movie, index) => (
                    <Movie key={index} movie={movie} removeMovie={removeMovie} />
                ))}
            </ul>
        </div>
    );
}

export default Movies;
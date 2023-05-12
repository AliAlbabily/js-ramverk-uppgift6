import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import imageDelete from './images/delete.png';
import imageStar from './images/star.png';

function Movie({ movie }) {
    return (
        // <li data-grade="${movie.grade}" data-title="${movie.title}">
        //     {movie.title} - Grade: {movie.grade}
        // </li>
        <li>
            test data
            <img src={imageDelete} alt="Delete movie" className="delete-movie-icon" />
            <img src={imageStar} alt="Delete movie" />
        </li>
    );
}

export default Movie;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import imageDelete from './images/delete.png';
import imageStar from './images/star.png';

function Movie({ movie }) {
    const getStars = Array.from({ length: movie.grade }, (_, index) => (
        <img key={index} src={imageStar} alt="Star" />
    ));
    
    return (
        <li>
            {movie.title}
            <img src={imageDelete} alt="Delete movie" className="delete-movie-icon" />
            {getStars}
        </li>
    );
}

export default Movie;
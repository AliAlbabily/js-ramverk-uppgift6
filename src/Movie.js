import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import imageDelete from './images/delete.png';
import imageStar from './images/star.png';

function Movie({ movie }) {
    return (
        <li>
            {movie.title}
            <img src={imageDelete} alt="Delete movie" className="delete-movie-icon" />
            <img src={imageStar} alt="Delete movie" />
        </li>
    );
}

export default Movie;
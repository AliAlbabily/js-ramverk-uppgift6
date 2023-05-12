import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import imageDelete from './images/delete.png';
import imageStar from './images/star.png';

function Movie({ movie, removeMovie }) {
    const getStars = Array.from({ length: movie.grade }, (_, index) => (
        <img key={index} src={imageStar} alt="Star" />
    ));

    const handleDeleteClick = () => {
        removeMovie(movie.title);
    };
    
    return (
        <li data-grade={movie.grade}>
            {movie.title}
            <img 
                src={imageDelete}
                alt="Delete movie"
                className="delete-movie-icon"
                onClick={handleDeleteClick} 
            />
            {getStars}
        </li>
    );
}

export default Movie;
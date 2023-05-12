import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function AddMovieForm({ addMovie }) {
    const titleRef = useRef(null);
    const gradeRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior

        // Access the input values using the refs
        const title = titleRef.current.value;
        const grade = gradeRef.current.value;

        if (!title || grade === "0") {
            alert("Du måste ange både titel & betyg för att kunna spara filmen!");
        }
        else {
            // Log the form values
            console.log('Submitted Title:', title);
            console.log('Submitted Grade:', grade);

            addMovie(title, grade);
            
            // Clear the form after submission
            event.target.reset();
        }

    };

    return (
        <form id="new-movie-form" onSubmit={handleSubmit}>
            <fieldset>
                <h1>Lägg till en film</h1>
                <div className="form-group">
                    <label htmlFor="title">Titel:</label>
                    <input type="text" className="form-control" id="title" placeholder="Titel här..." ref={titleRef} />
                </div>

                <div className="form-group">
                    <label htmlFor="grade">Betyg:</label>
                    <select id="grade" className="form-control" defaultValue="0" ref={gradeRef}>
                        <option value="0">Välj betyg här...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="form-group mt-2">
                    <button id="save-movie" className="btn btn-success" type="submit">
                        Spara film
                    </button>
                </div>
            </fieldset>
        </form>
    );
}

export default AddMovieForm;
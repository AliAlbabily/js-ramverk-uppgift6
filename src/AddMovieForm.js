import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function AddMovieForm() {
    return (
        <form id="new-movie-form">
            <fieldset>
                <h1>Lägg till en film</h1>
                <div className="form-group">
                    <label htmlFor="title">Titel:</label>
                    <input type="text" className="form-control" id="title" placeholder="Titel här..." />
                </div>

                <div className="form-group">
                    <label htmlFor="grade">Betyg:</label>
                    <select id="grade" className="form-control" defaultValue="0">
                        <option value="0">Välj betyg här...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="form-group mt-2">
                    <button id="save-movie" className="btn btn-success">
                        Spara film
                    </button>
                </div>
            </fieldset>
        </form>
    );
}

export default AddMovieForm;
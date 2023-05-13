import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function OrderByAlphaButton({ onClick }) {
    return(
        <button id="order-alphabetic" className="btn btn-primary" onClick={onClick}>Alfabetisk ordning</button>
    )
}

export default OrderByAlphaButton;
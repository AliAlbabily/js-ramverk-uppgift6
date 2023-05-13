import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function OrderByGradeButton({ onClick }) {
    return(
        <button id="order-grade" className="btn btn-primary" onClick={onClick}>Betygsordning</button>
    )
}

export default OrderByGradeButton;
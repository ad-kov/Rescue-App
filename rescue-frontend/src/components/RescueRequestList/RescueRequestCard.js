import React from 'react';
import { Link } from 'react-router-dom';
import './RescueRequestList.css';

const RescueRequestCard = ({ request }) => {
    return (
        <div className="request-card">
            <h3>{request.description}</h3>
            <p><strong>Location:</strong> {request.location}</p>
            <p><strong>Status:</strong> {request.status}</p>
            <p><strong>Requested at:</strong> {new Date(request.requestTime).toLocaleString()}</p>
            <div className="card-actions">
                <Link to={`/update/${request.id}`}>Update</Link>
                <Link to={`/delete/${request.id}`}>Delete</Link>
            </div>
        </div>
    );
};

export default RescueRequestCard;

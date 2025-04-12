import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import "./DeleteRequest.css";

const DeleteRequest = () => {
    const { id } = useParams();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            console.log(`Request ID: ${id}`);
        }
    }, [id]);

    const handleDelete = () => {
        if (!id) {
            setError('Request ID is missing!');
            return;
        }

        console.log(`Trying to delete request with id: ${id}`);

        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/rescue/${id}`)
            .then(response => { 
                console.log('Delete response:', response);
                navigate('/');
            })
            .catch(error => {
                console.error('There was an error deleting the request!', error.response ? error.response.data : error.message);
                alert('Error deleting request');
            });
    };

    return (
        <div className="delete-request-container">
            <h2>Are you sure you want to delete this request?</h2>
            <button className="delete-btn" onClick={handleDelete}>Delete Request</button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default DeleteRequest;

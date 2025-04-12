import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import "./UpdateRequest.css";

const UpdateRequest = () => {
    const { id } = useParams(); // Access the 'id' from the URL
    const [request, setRequest] = useState(null);
    const [status, setStatus] = useState('Pending'); // Default status
    const navigate = useNavigate(); // To navigate back to the list after update

    useEffect(() => {
        console.log('ID from useParams:', id); // Debugging
        if (id) {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/rescue/${id}`)
                .then(response => {
                    console.log('Fetched request:', response.data); // Check the data
                    setRequest(response.data);
                    setStatus(response.data.status); // Set the current status
                })
                .catch(error => {
                    console.error('There was an error fetching the request!', error);
                });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedRequest = {
            ...request,
            status, // Update status
        };

        // Send the update request
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/rescue/${id}`, updatedRequest)
            .then(response => {
                alert('Request Updated');
                navigate('/'); // Navigate back to the main list of requests
            })
            .catch(error => {
                console.error('There was an error updating the request!', error);
            });
    };

    if (!request) return <div>Loading...</div>; // Loading state

    return (
        <div className="update-request-container">
            <h2>Update Rescue Request</h2>
            <form onSubmit={handleSubmit} className="update-form">
                <div className="form-item">
                    <strong>Description:</strong>
                    <p>{request.description}</p>
                </div>
                <div className="form-item">
                    <strong>Location:</strong>
                    <p>{request.location}</p>
                </div>
                <div className="form-item">
                    <label>
                        Status:
                        <select value={status} onChange={(e) => setStatus(e.target.value)} className="status-select">
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </label>
                </div>
                <div className="form-item">
                    <button type="submit" className="update-btn">Update Status</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateRequest;

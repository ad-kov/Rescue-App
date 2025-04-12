import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateRequest.css';

const CreateRequest = () => {
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !location) {
            alert("Both description and location are required.");
            return;
        }
        const newRequest = {
            description,
            location,
            status: 'Pending',
            requestTime: new Date().toISOString()
        };

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/rescue`, newRequest)
            .then(response => {
                setDescription('');
                setLocation('');
                navigate('/')
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    alert(error.response.data);
                } else {
                    alert("There was an error with your request creation.");
                }
            });
    };

    return (
        <div className="create-request">
            <h2>Create a New Rescue Request</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    className="input-field"
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button className="submit-button" type="submit">Create Request</button>
            </form>
        </div>
    );
};

export default CreateRequest;

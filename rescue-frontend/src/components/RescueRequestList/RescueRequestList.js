import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RescueRequestCard from './RescueRequestCard';
import './RescueRequestList.css';

const RescueRequestList = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/rescue`)
            .then(response => {
                setRequests(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the requests!', error);
            });
    }, []);

    return (
        <div className="request-list-page">
            <h2>Rescue Requests</h2>

            <div className="top-buttons">
                <Link to="/create">
                    <button>Create Request</button>
                </Link>
            </div>

            {requests.length === 0 ? (
                <p>No requests available.</p>
            ) : (
                <div className="request-list">
                    {requests.map(request => (
                        <RescueRequestCard key={request.id} request={request} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RescueRequestList;

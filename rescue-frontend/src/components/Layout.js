import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="app-container">
            <nav className="navbar">
                <h1>Rescue App</h1>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create">Create</Link></li>
                </ul>
            </nav>
            <main className="content">
                {children}
            </main>
        </div>
    );
};

export default Layout;

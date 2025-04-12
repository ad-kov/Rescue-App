import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RescueRequestList from './components/RescueRequestList/RescueRequestList';
import CreateRequest from './components/CreateRequest/CreateRequest';
import UpdateRequest from './components/UpdateRequest/UpdateRequest';
import DeleteRequest from './components/DeleteRequest/DeleteRequest';
import Layout from './components/Layout';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<RescueRequestList />} />
                    <Route path="/create" element={<CreateRequest />} />
                    <Route path="/update/:id" element={<UpdateRequest />} />
                    <Route path="/delete/:id" element={<DeleteRequest />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;

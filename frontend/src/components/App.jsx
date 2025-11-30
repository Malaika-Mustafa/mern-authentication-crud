
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import CRUDApp from '../CRUD_APP';
import '../index.css'

function App() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    return (
    
            <BrowserRouter>
                <Routes>
                     {/* Redirect "/" to Home if logged in, otherwise Register */}
                     <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Register />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />

                    {/* Protected Route for Home */}
                    <Route
                        path="/*"
                        element={isLoggedIn ? <CRUDApp /> : <Navigate to="/login" />}
                    />
                </Routes>
            </BrowserRouter>
       
    );
}

export default App;

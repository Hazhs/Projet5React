import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Location from '../Pages/Location';
import PageNotFound from '../Pages/PageNotFound';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function AppRouter () {
    return (
        <React.StrictMode>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/a-propos" element={<About />}/>
                    <Route path="/Location" element={<Location />}/>
                    <Route path="/404" element={<PageNotFound />}/>
                    <Route path="*" element={<PageNotFound />}/> 
                </Routes>
                <Footer />
            </Router>
        </React.StrictMode>
    );
};

export default AppRouter
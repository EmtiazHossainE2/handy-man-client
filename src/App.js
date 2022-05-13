import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import About from './pages/About/About';
import Login from './pages/Account/Login';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';

const App = () => {
    return (
        <div>
            <Navbar>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/services' element={<Services />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
                <Footer />
            </Navbar>
        </div>
    );
};

export default App;
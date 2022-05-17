import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import About from './pages/About/About';
import Login from './pages/Account/Login';
import RequireAuth from './pages/Account/RequireAuth';
import SignUp from './pages/Account/SignUp';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import { Toaster } from 'react-hot-toast';
import ServiceDetail from './pages/Home/ServiceDetail';



const App = () => {
    return (
        <div className=''>
            <Navbar>
                <Routes >
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/services' element={<Services />}></Route>
                    <Route path='/service/:serviceId' element={
                        <RequireAuth>
                            <ServiceDetail/>
                        </RequireAuth>
                    }></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/signup' element={<SignUp />}></Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
                <Toaster />
                <Footer />
            </Navbar>
        </div>
    );
};

export default App;
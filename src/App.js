import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
import ServiceDetail from './pages/Services/ServiceDetail';
import ScrollToTop from './components/ScrollToTop';
import Dashboard from './pages/Dashboard/Dashboard';
import MyBooking from './pages/Dashboard/MyBooking';
import MyReview from './pages/Dashboard/MyReview';



const App = () => {
    return (
        <div className=''>
            <Navbar>
                <ScrollToTop>
                    <Routes >
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/services' element={<Services />}></Route>
                        <Route path='/service/:serviceId' element={
                            <RequireAuth>
                                <ServiceDetail />
                            </RequireAuth>
                        }></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/contact' element={<Contact />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/signup' element={<SignUp />}></Route>

                        {/* dashboard start */} 

                        <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
                            <Route path='my-booking' element={<MyBooking/>}></Route>
                            <Route path='my-review' element={<MyReview/>}></Route>
                        </Route>


                        {/* dashboard end */} 

                        <Route path='*' element={<NotFound />}></Route>
                    </Routes>
                    <Toaster />
                </ScrollToTop>
            </Navbar>
        </div>
    );
};

export default App;
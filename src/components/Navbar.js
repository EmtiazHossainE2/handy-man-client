import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../Firebase/firebase.init';

const Navbar = ({ children }) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    const logOut = () => {
        signOut(auth)
        navigate('/login');
    }

    const menuItems = <>
        <li>
            <NavLink to='/' className='rounded-lg text-md font-bold'>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/services' className='rounded-lg text-md font-bold'>
                Services
            </NavLink>
        </li>
        <li>
            <NavLink to='/contact' className='rounded-lg text-md font-bold'>
                Contact
            </NavLink>
        </li>
        <li>
            <NavLink to='/about' className='rounded-lg text-md font-bold'>
                About
            </NavLink>
        </li>
        <li>
            {user?.uid
                ?
                <button onClick={logOut}  className='rounded-lg text-md font-bold'>Log Out</button>
                :
                <NavLink to='/login' className='rounded-lg text-md font-bold'>
                    Login
                </NavLink>
            }
        </li>
    </>
    return (
        <div >
            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <div className="w-full navbar bg-[#2e5789] text-white lg:px-12 sticky top-0 z-50" >
                        <Link to='/' className="flex-1 text-2xl font-bold px-2 mx-2 text-white">Handy Man</Link>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal space-x-2">
                                {menuItems}
                            </ul>
                        </div>
                    </div>
                    {/*  Page content here  */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({children}) => {
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
            <NavLink to='/login' className='rounded-lg text-md font-bold'>
                Login
            </NavLink>
        </li>
    </>
    return (
        <div>
            <div class="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    <div class="w-full navbar bg-base-100  lg:px-12  z-50">
                        <Link to='/' class="flex-1 text-2xl px-2 mx-2 ">Handy Man</Link>
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal space-x-2">
                                {menuItems}
                            </ul>
                        </div>
                    </div>
                    {/*  Page content here  */}
                    {children}
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
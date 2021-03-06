import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  justify-center pt-12">
                    {/* <!-- Page content here --> */}
                    <h2 className='text-3xl text-purple-700 text-center'>DashBoard </h2>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-[#2e5789] text-white  space-y-4">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to='/dashboard/my-profile' className='text-lg'>Profile</NavLink></li>
                        <li><NavLink to='/dashboard/my-booking' className='text-lg'>My Booking</NavLink></li>
                        <li><NavLink to='/dashboard/my-review' className='text-lg'>My Review</NavLink></li>
                        {admin && <>
                            <li><NavLink to='/dashboard/add-service-man' className='text-lg'>Add Service Man</NavLink></li>
                            <li><NavLink to='/dashboard/manage-service-man' className='text-lg'>Manage Service Man</NavLink></li>
                            <li><NavLink to='/dashboard/all-user' className='text-lg'>All User</NavLink></li>
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
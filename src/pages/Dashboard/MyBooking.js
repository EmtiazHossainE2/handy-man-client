import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const MyBooking = () => {
    const [myBookings, setMyBookings] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setMyBookings(data))
        }
    }, [user])
    return (
        <div>
            <h2 className='md:p-4 text-xl'>Hello , {user?.displayName} . You have {myBookings.length} booking</h2>
            <div className='md:p-4'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Service Name</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Address</th>
                                <th>Date</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myBookings.map((b, index) =>
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{b.serviceName}</td>
                                        <td>{b.email}</td>
                                        <td>${b.price}</td>
                                        <td>{b.address}</td>
                                        <td>{b.date}</td>
                                        <td><button className='btn btn-warning btn-xs'>Pay</button></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBooking;
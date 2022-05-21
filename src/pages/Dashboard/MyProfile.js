import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import auth from '../../Firebase/firebase.init';
import useAdmin from '../../hooks/useAdmin';
import demoProfile from '../../assets/images/demo-profile.png'
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const [myDetails, setMyDetails] = useState([])
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    // console.log(admin);
    const email = user?.email
    // console.log(user);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setMyDetails(data)
                })
        }
    }, [email])



    return (
        <div className='md:p-4'>
            <div className="card card-side bg-base-100 shadow-xl pb-5 mb-12">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className='text-2xl font-bold py-5'>My Profile </h2>
                        <Link to='' className='text-lg text-success py-5'>Edit profile </Link>
                    </div>
                    <hr />
                    <div className='flex flex-col lg:flex-row'>
                        <div className='basis-2/4 p-8 '>
                            <div className='flex items-center justify-center'>
                                {user?.photoURL
                                    ?
                                    <div className="avatar">
                                        <div className="w-36 ">
                                            <img src={myDetails?.photoURL} alt="User" />
                                        </div>
                                    </div>
                                    :
                                    <div className="avatar">
                                        <div className="w-36">
                                            <img src={demoProfile} alt="Demo" />
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='basis-3/4 space-y-5 py-5'>
                            <div>
                                {admin === true ?
                                    <>
                                        <h3 className='text-lg font-bold'>Admin Name</h3>
                                    </>
                                    :
                                    <h3 className='text-lg font-bold'>User Name</h3>
                                }
                                <p>{myDetails?.displayName}</p>
                            </div>
                            <div>
                                <h3 className='text-lg font-bold'>Email Address</h3>
                                <p>{myDetails?.email}</p>
                            </div>
                            <div>
                                <h3 className='text-lg font-bold'>Phone Number</h3>
                                <div>
                                    {myDetails?.phoneNumber ?
                                        <>
                                            <p className=''>{user?.phoneNumber}</p>
                                        </>
                                        :
                                        <p className=''>Update please</p>
                                    }
                                </div>
                            </div>
                            <div>
                                <h3 className='text-lg font-bold'>Role</h3>
                                <div>
                                    {myDetails?.role ?
                                        <>
                                            <p className=''>{myDetails?.role}</p>
                                        </>
                                        :
                                        <p className=''>User</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h2 className='font-bold text-2xl py-5'>Activity</h2>
                        <div className="overflow-x-auto ">
                            <table className="table w-full ">
                                <thead>
                                    <tr>
                                        <th>Creation Time</th>
                                        <th>Last Login</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <th>{myDetails?.creationTime}</th>
                                        <th>{myDetails?.lastLogin}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
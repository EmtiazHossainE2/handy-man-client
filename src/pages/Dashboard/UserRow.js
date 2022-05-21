import React from 'react';
import Swal from 'sweetalert2';
import demoProfile from '../../assets/images/demo-profile.png'

const UserRow = ({ user, index, refetch }) => {
    // console.log(user);
    const { email, role } = user

    const makeAdmin = () => {
        const url = `http://localhost:5000/user/admin/${email}`
        Swal.fire({
            text: "Are you sure to make admin ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Admin",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                })
                    .then(res => {
                        if (res.status === 403) {
                            Swal.fire({
                                text: 'Your are unable to make Admin',
                                icon: 'error',
                                confirmButtonText: 'Okay'
                            })
                        }
                        return res.json()
                    })
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                text: `Successfully added an Admin`,
                                icon: 'success',
                                confirmButtonText: 'Thank you.'
                            })
                        }
                    })
            }
        })

    }

    const handleDelete = () => {
        const url = `http://localhost:5000/user/${email}`;
        Swal.fire({
            text: `Are you sure to delete  ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                }).then(data => {
                    // console.log(data);
                    if (data.status) {
                        Swal.fire({
                            text: `Successfully Delete `,
                            icon: 'success',
                            confirmButtonText: 'Okay'
                        })
                        refetch()
                    }
                })
            }
        })

    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                {user?.photoURL
                    ?
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={user?.photoURL} alt="User Profile" />
                        </div>
                    </div>
                    :
                    <div className="avatar">
                        <div className="w-12 rounded">
                            <img src={demoProfile} alt="Demo Profile" />
                        </div>
                    </div>
                }
            </td>
            <td>{email}</td>
            <td>
                {role ?
                    <div className='text-lg text-green-500 font-bold'>Admin</div>
                    :
                    <div className='text-md'>user</div>
                }
            </td>
            <td>
                {role ?
                    <>
                        <button className='btn btn-xs'>Remove Admin</button>
                    </>
                    :
                    <>
                        <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>
                    </>
                }
            </td>
            <td><button onClick={handleDelete} className='btn btn-xs btn-error'>Remove</button></td>
        </tr>
    );
};

export default UserRow;
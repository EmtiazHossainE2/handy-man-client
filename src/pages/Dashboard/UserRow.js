import React from 'react';
import demoProfile from '../../assets/images/demo-profile.png'

const UserRow = ({ user, index, refetch }) => {
    console.log(user);
    const {  email } = user
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                {user?.photoURL
                    ?
                    <div class="avatar">
                        <div class="w-16 rounded-full">
                            <img src={user?.photoURL} alt="User Profile" />
                        </div>
                    </div>
                    :
                    <div class="avatar">
                        <div class="w-16 rounded">
                            <img src={demoProfile} alt="Demo Profile" />
                        </div>
                    </div>
                }
            </td>
            <td>{email}</td>
            <td><button className='btn btn-xs btn-'>User</button></td>
            <td><button className='btn btn-xs'>Make Admin</button></td>
            <td><button className='btn btn-xs btn-error'>Remove</button></td>
        </tr>
    );
};

export default UserRow;
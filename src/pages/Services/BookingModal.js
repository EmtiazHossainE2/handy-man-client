import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../Firebase/firebase.init';

const BookingModal = ({ getService, setGetService }) => {
    const [user] = useAuthState(auth)

    const handleBooking = (event) => {
        event.preventDefault()
        const bookingInfo = {
            serviceName : getService?.name,
            available : getService?.available ,
            userName : user?.displayName,
            email : user?.email ,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        if (bookingInfo.address === '' ) {
            Swal.fire({
                text: "Provide Original Address",
                icon: 'error',
                confirmButtonText: 'Okay'
            })
            return
        }
        if (bookingInfo.phone === '' ) {
            Swal.fire({
                text:'Provide Phone Number',
                icon: 'error',
                confirmButtonText: 'Okay'
            })
            return
        }
        
        else{
            setGetService(null)
        }
        
        console.log(bookingInfo);



    }



    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Service Name:  {getService?.name}</h3>
                    <p className="py-2 text-lg">Available:  {getService?.available}</p>
                    <div className='text-center '>
                        <form onSubmit={handleBooking} className='space-y-4 pt-8 '>
                            <input type="text" disabled value={user?.displayName || ''} name='userName' className="input input-bordered w-full max-w-md text-lg" />
                            <input type="email" disabled value={user?.email || ''} name='email' className="input input-bordered w-full max-w-md text-lg" />
                            <textarea  rows={2} type="text" placeholder='Your Address' name='address' className=" input-bordered w-full textarea max-w-md text-lg " />
                            <input type="number" placeholder="Phone Number" name='phone' className="input input-bordered w-full max-w-md text-lg" />
                            <input type="submit" value="Submit" className="btn btn-secondary text-white w-full max-w-md text-lg" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
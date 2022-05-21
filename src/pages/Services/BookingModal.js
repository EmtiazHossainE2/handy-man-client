import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../Firebase/firebase.init';

const BookingModal = ({ getService, setGetService ,refetch }) => {
    const [user] = useAuthState(auth)
    const { serviceId } = useParams()
    
    // console.log(serviceId);
    // console.log(getService);

    const handleBooking = (event) => {
        event.preventDefault()
        const bookingInfo = {
            serviceName: getService?.name,
            price: getService?.price,
            userName: user?.displayName,
            email: user?.email,
            date: event.target.date.value,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        if (bookingInfo.date === '') {
            Swal.fire({
                text: "Please select date",
                icon: 'error',
                confirmButtonText: 'Okay'
            })
            return
        }
        if (bookingInfo.address === '') {
            Swal.fire({
                text: "Provide Original Address",
                icon: 'error',
                confirmButtonText: 'Okay'
            })
            return
        }
        if (bookingInfo.phone === '') {
            Swal.fire({
                text: 'Provide Phone Number',
                icon: 'error',
                confirmButtonText: 'Okay'
            })
            return
        }

        else {
            axios.post('http://localhost:5000/booking', bookingInfo)
                .then(function (response) {
                    if (response.data.success) {
                        Swal.fire({
                            text: `You are booking ${bookingInfo?.serviceName} on ${bookingInfo?.date} .We will contact you soon . `,
                            icon: 'success',
                            confirmButtonText: 'Thank you.'
                        })

                        const newAvailable = {
                            available: parseInt(getService?.available) - 1,
                        }
                        const url = `http://localhost:5000/service/${serviceId}`

                        fetch(url, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(newAvailable),
                        })
                            .then(response => response.json())
                            .then(data => {
                                setGetService(newAvailable)
                                refetch()

                            })
                            .catch((error) => {
                                // console.error(error);
                            });
                    }
                    else {
                        Swal.fire({
                            text: `Already have a booking on ${response?.data?.booking?.date} `,
                            icon: 'error',
                            confirmButtonText: 'Try Another Day'
                        })
                    }
                    setGetService(null)
                })
                .catch(function (error) {
                    console.log(error);
                    toast.error(`Something is wrong . Try later `, { id: "bookingError" });
                });
        }
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg ">Service Name:  {getService?.name}</h3>
                    <p className="py-2 text-lg">Available:  {getService?.available}</p>
                    <div className='text-center '>
                        <form onSubmit={handleBooking} className='space-y-4 pt-8 '>
                            <input type="text" disabled value={user?.displayName || ''} name='userName' className="input input-bordered w-full max-w-md text-lg" />
                            <input type="email" disabled value={user?.email || ''} name='email' className="input input-bordered w-full max-w-md text-lg" />
                            <input type="date" name='date' className="input input-bordered w-full max-w-md text-lg" />
                            <textarea rows={2} type="text" placeholder='Your Address' name='address' className=" input-bordered w-full textarea max-w-md text-lg " />
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
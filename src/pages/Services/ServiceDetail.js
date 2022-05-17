import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail'
import BookingModal from './BookingModal';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [detail] = useServiceDetail(serviceId)
    const [getService , setGetService] = useState(null)

    return (
        <>

            <div className='px-5 lg:px-20 py-8 lg:py-16'>
                <div className="flex flex-col lg:flex-row justify-start items-center">
                    <div className="flex-1">
                        <div>
                            <img className='w-full px-5' src={detail?.img} alt="service-man" />
                        </div>
                    </div>
                    <div className="flex-1 px-5">
                        <div className='space-y-4'>
                            <h2 className='text-2xl'>Service Name : {detail?.name}</h2>
                            <p className='text-lg'>Available Service : {detail?.available}</p>
                            <h4 className='text-xl font-bold'>Price : ${detail?.price}</h4>
                            <p className='text-slate-500'><span className='font-bold text-lg'>Description :</span> {detail?.des}</p>
                        </div>
                        <div className='my-5'>
                            <label
                                htmlFor="booking-modal"
                                disabled={detail?.available === 0}
                                onClick={() => setGetService(detail)} 
                                className="btn btn-secondary uppercase " >Book Service</label>
                        </div>
                    </div>
                </div>
                {getService && <BookingModal
                getService={getService}
                setGetService={setGetService}>
            </BookingModal>}
            </div>
        </>
    );
};

export default ServiceDetail;
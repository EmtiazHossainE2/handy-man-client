import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import BookingModal from './BookingModal';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    // const [detail, setDetail] = useServiceDetail(serviceId)

    const { data: detail, isLoading, refetch } = useQuery('detail', () => fetch(`https://safe-hamlet-60048.herokuapp.com/service/${serviceId}`).then(res => res.json()))

    // console.log(detail);

    const [getService, setGetService] = useState(null)

    if (isLoading) {
        return <Loading />
    }

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
                            <h2 className='text-2xl pt-5 lg:mt-0'>Service Name : {detail?.name}</h2>
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
                    setGetService={setGetService}
                    refetch={refetch}
                >
                </BookingModal>}
            </div>
        </>
    );
};

export default ServiceDetail;
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import BookingModal from './BookingModal';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    // const [detail, setDetail] = useServiceDetail(serviceId)

    const { data: detail, isLoading, refetch } = useQuery('detail', () => fetch(`http://localhost:5000/service/${serviceId}`).then(res => res.json()))

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
                <div className='py-5'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nesciunt sint, earum, nemo, saepe voluptas atque qui dicta animi autem molestias facere delectus magnam quo rem ratione! Voluptas necessitatibus veritatis esse, in numquam possimus ducimus totam soluta maiores eveniet. Ipsam qui explicabo accusantium corporis, neque minus nihil animi possimus ad exercitationem pariatur, sint nostrum, voluptatum laborum a? Placeat eos ipsam sed ad vel perferendis at itaque blanditiis enim quaerat repellat, incidunt inventore voluptatem dolor obcaecati porro fuga voluptatum similique iste tempore sequi perspiciatis earum veniam magnam. Consectetur tempore non magnam dolor excepturi blanditiis impedit corrupti expedita explicabo perferendis commodi quam fuga, omnis inventore tenetur optio aperiam ratione. Commodi, quae possimus. Dolores itaque ullam deleniti hic reprehenderit labore, libero corporis est perferendis adipisci quos alias commodi voluptatum sapiente, quisquam obcaecati ex reiciendis iure quod delectus tenetur, magni odio excepturi et. Cum alias molestiae odit dolores at iste omnis, obcaecati tempore aliquam eaque aperiam quo, blanditiis ipsa debitis perferendis non placeat in totam. Distinctio soluta optio iste officia, culpa necessitatibus autem non ab itaque asperiores explicabo dolores tempora esse iusto mollitia quae amet! Enim, dolorem ut eius natus nulla reiciendis accusamus pariatur est sapiente porro impedit magni aliquid? Quo expedita architecto eaque quia? Hic, a. Praesentium, magni iste consectetur fuga magnam non optio incidunt quae neque nulla temporibus officia voluptates sunt voluptatum atque quia fugiat dolor. Magnam veritatis deleniti nemo sint, dolore sapiente explicabo ex? Quia deserunt sapiente aperiam animi harum nisi delectus laudantium laboriosam neque? Eligendi temporibus numquam minima illo, nostrum, commodi quas est magnam sed fuga asperiores minus sequi! Natus id ea, unde quos tenetur numquam sequi iure, dolorum laudantium dignissimos dolor. Asperiores, voluptas architecto sit magnam adipisci repellat facere quisquam debitis excepturi harum alias at incidunt repellendus ullam a animi distinctio rerum maxime optio ipsa, perspiciatis tempore omnis nulla recusandae? Dolor veniam dolores porro libero recusandae illo laboriosam maxime? Autem accusamus tempora hic nesciunt, soluta optio unde blanditiis quo. Neque minus aspernatur voluptatum magni vitae error laborum unde? Molestiae aperiam, sit placeat nam reprehenderit assumenda, quo iure expedita esse vero iusto explicabo eaque maxime perferendis sint corrupti illum distinctio amet, saepe odio vel consequatur provident aliquid temporibus. Iste quae deserunt mollitia dignissimos veniam illum ullam reiciendis unde consequuntur quibusdam, voluptate minus ea porro maiores dolorem eligendi voluptates. Rerum facere laudantium debitis illum nemo odio ex commodi excepturi ab, facilis quae nesciunt! In laborum laboriosam iusto. Magni molestiae harum minus.</p>
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
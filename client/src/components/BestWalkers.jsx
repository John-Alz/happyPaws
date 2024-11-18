import CardWalker from './CardWalker';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function BestWalkers() {


    const { data } = useFetch('users/Paseador')
    console.log(data);


    return (
        <div className='w-11/12 m-auto'>
            <div className='flex justify-between mb-8 mt-8'>
                <h2 className='text-4xl font-semibold'>Paseadores destacados</h2>
                <Link to={'/paseadores'}><button className='bg-black py-2 px-4 rounded-xl text-white hover:bg-primaryColor'>Ver todos</button></Link>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >

                {
                    data ? data.map((item, i) => {
                        return (
                            <SwiperSlide>
                                <div key={i} >
                                    <Link to={`/paseador/${item._id}`}>
                                        <CardWalker photo={item.photo} name={item.name} hourlyRate={item.paseadorInfo.hourlyRate} />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )
                    }) : <h2>No hay paseadores</h2>
                }

            </Swiper >
        </div>

    )
}

import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSingleWalker } from '../redux/usersSlice';
import { IoLocationSharp } from "react-icons/io5";
import Footer from './Footer';
import Booking from './booking';

export default function DetailWaker() {

    const dispatch = useDispatch();

    let params = useParams();
    console.log(params.id);

    const data = useSelector(state => state.users.singleWalker)

    const getWalker = async () => {
        try {
            let response = await axios.get(`http://localhost:3000/api/user/${params.id}`)
            dispatch(setSingleWalker(response.data))

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getWalker()
    }, [])

    console.log(data);



    return (
        <section>
            {/* <div className='bg-violet h-40 relative'>

            </div> */}
            <div className='w-10/12 m-auto bg-walker-bg bg-cover bg-no-repeat rounded-xl p-4'>
                <img src={data.photo} alt={data.name} className='w-40 h-40 rounded-full' />
                <div className='flex justify-between items-center py-6 text-black font-semibold gap-2'>

                    {/* <p className=' text-xl  '>{data.name}</p> */}
                    <div className='flex flex-col'>
                        <h2 className=' text-5xl '>{data.name}</h2>
                        <div className='flex'>
                            <IoLocationSharp size={25} className='flex justify-center items-center text-primaryColor' />
                            <p className=' text-xl '>{data.paseadorInfo ? data.paseadorInfo.companyAddress : <p>NO DISPONIBLE</p>}</p>
                        </div>
                    </div>
                    <div className=' gap-45'>
                        <div className='w-32'></div>
                        <button className='bg-primaryColor  py-2 px-4 text-lg text-black rounded-xl shadow-lg'>anadir a favoritos</button>
                    </div>
                </div>

            </div>
            <div className='w-10/12 m-auto mt-10 flex gap-16'>
                <div className='w-3/6 flex flex-col gap-4'>
                    <div className='w-72 flex justify-between'>
                        <div className='w-24 flex flex-col'>
                            <p className='opacity-45'>Experiencia</p>
                            <p className='text-center text-lg font-bold'>1.5 anios</p>
                        </div>
                        <div className='w-32 flex flex-col'>
                            <p className='opacity-45'>Costo por hora</p>
                            <p className='text-center text-lg font-bold'>${data.paseadorInfo ? data.paseadorInfo.hourlyRate : <p>NO DISPONILE</p>}/h</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-3xl font-semibold mb-4'>Quien soy?</h2>
                        <p>
                            ¡Regálale a tu perro el paseo que merece! <br /> <br />
                            Soy un paseador confiable y apasionado, que hará que cada salida sea segura, divertida y llena de ejercicio. Cada paseo está diseñado para adaptarse a las necesidades y energía de tu perro, brindándole momentos de alegría y exploración mientras tú tienes la tranquilidad de saber que está en buenas manos. <br /><br />

                            ¡Agenda hoy y dale a tu amigo de cuatro patas la aventura que tanto disfruta! 🐾
                        </p>
                    </div>

                </div>
                <div className='w-3/6 flex justify-end'>
                    <Booking idWalker={params.id} />
                </div>
            </div>
        </section>
    )
}



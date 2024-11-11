import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSingleWalker } from '../redux/usersSlice';
import { IoLocationSharp } from "react-icons/io5";
import Footer from './Footer';

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
            <div className='bg-violet relative'>
                <div className='w-11/12 m-auto flex justify-between pt-12'>
                    <img src={data.photo} alt={data.name} className='w-60 h-60 rounded-full translate-y-11' />
                    <div className='flex flex-col justify-end py-6 text-white font-semibold gap-2'>
                        <h2 className=' text-5xl  '>{data.name}</h2>
                        {/* <p className=' text-xl  '>{data.name}</p> */}
                        <div className='flex'>
                            <IoLocationSharp size={25} className='flex justify-center items-center text-primaryColor' />
                            <p className=' text-xl '>{data.paseadorInfo ? data.paseadorInfo.companyAddress : <p>NO DISPONIBLE</p>}</p>
                        </div>

                    </div>
                    <div className='flex items-end justify-end gap-4 translate-y-5'>
                        <button className='bg-primaryColor border border-primaryColor py-2 px-4 text-lg rounded-xl shadow-lg'>Resevar paseo</button>
                        <button className='bg-white border border-white py-2 px-4 text-lg text-black rounded-xl shadow-lg'>anadir a favoritos</button>
                    </div>
                </div>
            </div>
            <div className='w-11/12 m-auto mt-20 flex gap-16'>
                <div className='w-2/6'>
                    <h2 className='text-3xl font-semibold mb-4'>Quien soy?</h2>
                    <p>
                        ¡Regálale a tu perro el paseo que merece!
                        Soy un paseador confiable y apasionado, que hará que cada salida sea segura, divertida y llena de ejercicio. Cada paseo está diseñado para adaptarse a las necesidades y energía de tu perro, brindándole momentos de alegría y exploración mientras tú tienes la tranquilidad de saber que está en buenas manos.

                        ¡Agenda hoy y dale a tu amigo de cuatro patas la aventura que tanto disfruta! 🐾
                    </p>
                </div>
                <div className='w-3/6 flex justify-around'>
                    <div className='w-24 flex flex-col'>
                        <p className='opacity-45'>Experiencia</p>
                        <p className='text-center text-lg font-bold'>1.5 anios</p>
                    </div>
                    <div className='w-32 flex flex-col'>
                        <p className='opacity-45'>Costo por hora</p>
                        <p className='text-center text-lg font-bold'>${data.paseadorInfo ? data.paseadorInfo.hourlyRate : <p>NO DISPONILE</p>}/h</p>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPets, setPetsByOwner } from '../redux/petsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../services/apiServices';
import { setWalkers } from '../redux/usersSlice';
import { useParams } from 'react-router-dom';
import { setWalk } from '../redux/walksSlice';

export default function Booking({ idWalker, nameWalker }) {

    const profile = useSelector(state => state.users.profile)

    const params = useParams();


    let [booking, setBooking] = useState({
        dateWalk: "",
        startTimeWalk: "",
        timeWalk: '',
        newsWalk: "",
        pet: "",
        walker: idWalker ? idWalker : "",
    })

    console.log(idWalker);
    console.log(booking.dateWalk);
    console.log(profile.role);

    const createWalk = async () => {

        // let endPonit = params.id ? `walk/${params.id}` : 'walks';
        // let method = params.id ? api.put : api.post;

        let endPonit;
        let method;

        if (params.id && profile.role === "Duenio") {
            endPonit = 'walks';
            method = api.post;
        }

        if (params.id && profile.role === "Administrador") {
            endPonit = `walk/${params.id}`;
            method = api.put;
        } else {
            endPonit = 'walks'
            method = api.post;
        }

        try {
            let response = await method(endPonit, booking)
            console.log(response);
            if (response.status === 200) {
                toast.success('Paseo creado correctamente')
            } else {
                toast.error('Ups, algo salio mal.')
            }
        } catch (error) {
            console.log(error);
            toast.error("Falta algun dato en el formulario")
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    // admin

    const walkers = useSelector(state => state.users.walkers)
    const pets = useSelector(state => state.pets.pets)
    const walk = useSelector(state => state.walks.walk)
    console.log(pets);


    const getWalkers = async () => {
        try {
            let response = await api.get('users/Paseador');
            dispatch(setWalkers(response))
        } catch (error) {
            console.error(error)
        }
    }

    const getPets = async () => {
        try {
            let response = await api.get('pets');
            dispatch(setPets(response))
        } catch (error) {
            console.error(error)
        }
    }

    const getWalk = async () => {
        try {
            let response = await api.get(`walk/${params.id}`)
            console.log(response);
            dispatch(setWalk(response))
            setBooking({
                dateWalk: formatDate(response?.dateWalk || ""),
                startTimeWalk: response?.startTimeWalk || "",
                timeWalk: response?.timeWalk || 0,
                newsWalk: response?.newsWalk || "",
                pet: response?.pet?._id || "",
                walker: response?.walker?._id || "",
            })

        } catch (error) {
            console.error(error)
        }
    }



    //

    const owner = useSelector(state => state.users.profile)
    const petsByOwner = useSelector(state => state.pets.petsByOwner)

    const dispatch = useDispatch();
    const getPetsOwner = async () => {
        let response = await api.get(`pets/${owner._id}`)
        dispatch(setPetsByOwner(response))
        console.log(response.data);
    }

    useEffect(() => {
        getPetsOwner()
        getWalkers()
        getPets()
        getWalk()
    }, [])

    console.log(petsByOwner);


    const handleChange = (e) => {
        e.preventDefault();
        setBooking({
            ...booking,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(booking);
        createWalk()
        setBooking({
            dateWalk: "",
            startTimeWalk: "",
            timeWalk: 0,
            newsWalk: "",
            pet: "",
        })
    }


    return (
        <div>
            <ToastContainer />
            <div className='flex flex-col  items-center'>
                <form className='w-full flex flex-col gap-2  bg-gray p-8 rounded-xl'>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Fecha</label>
                        <input onChange={handleChange} type='date' value={booking.dateWalk} name='dateWalk'
                            className=' py-2 px-4 placeholder:text rounded-xl'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Hora de incio del paseo</label>
                        <input onChange={handleChange} type='time' value={booking.startTimeWalk} name='startTimeWalk'
                            className=' py-2 px-4 placeholder:text rounded-xl'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Duracion del paseo</label>
                        <input onChange={handleChange} type='number' value={booking.timeWalk} name='timeWalk' placeholder='Escribe la duracion del paseo...'
                            className=' py-2 px-4 placeholder:text rounded-xl'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Recomendaciones del paseo</label>
                        <input onChange={handleChange} type='text' value={booking.newsWalk} name='newsWalk' placeholder='Escribe cosas a tener en cuenta...'
                            className=' py-2 px-4 placeholder:text rounded-xl'
                        />
                    </div>
                    {
                        profile.role === "Duenio" ? <div className='flex flex-col '>
                            <label className='font-semibold'>Selecciona tu mascota</label>
                            <select onChange={handleChange} name='pet' className=' py-2 px-4 placeholder:text rounded-xl'>
                                <option selected disabled>Selecciona una mascota</option>
                                {
                                    petsByOwner ? petsByOwner.map((pet, i) => {
                                        return (
                                            <>
                                                <option value={pet._id}>{pet.petName}</option>
                                            </>
                                        )
                                    }) : null
                                }
                            </select>
                        </div> : null
                    }
                    {
                        profile.role === "Administrador" ? <div className='flex flex-col '>
                            <label className='font-semibold'>Selecciona una mascota</label>
                            <select onChange={handleChange} name='pet' value={params.id ? booking.pet : null} className=' py-2 px-4 placeholder:text rounded-xl'>
                                <option selected disabled>Selecciona una mascota</option>
                                {
                                    pets ? pets.map((pet, i) => {
                                        return (
                                            <>
                                                <option value={pet._id}>{pet.petName}</option>
                                            </>
                                        )
                                    }) : null
                                }
                            </select>
                        </div> : null
                    }
                    {
                        profile.role === "Administrador" ? <div className='flex flex-col '>
                            <label className='font-semibold'>Selecciona el paseador</label>
                            <select onChange={handleChange} name='walker' value={params.id ? booking.walker : null} className=' py-2 px-4 placeholder:text rounded-xl'>
                                <option selected disabled>Selecciona una mascota</option>
                                {
                                    walkers ? walkers.map((walker, i) => {
                                        return (
                                            <>
                                                <option value={walker._id}>{walker.name}</option>
                                            </>
                                        )
                                    }) : null
                                }
                            </select>
                        </div> : null
                    }
                    <button onClick={handleSubmit} className='bg-primaryColor rounded-xl text-white py-2 px-4 mt-2' >Reservar</button>
                </form>
            </div>
        </div>
    )
}

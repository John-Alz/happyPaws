import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPets } from '../redux/petsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Booking({ idWalker, nameWalker }) {

    let [booking, setBooking] = useState({
        dateWalk: "",
        startTimeWalk: "",
        timeWalk: 0,
        newsWalk: "",
        pet: "",
        walker: idWalker,
    })

    console.log(idWalker);
    console.log(booking);

    const createWalk = async () => {
        try {
            let response = await axios.post('http://localhost:3000/api/walks', booking)
            console.log(response);

            if (response.status === 200) {
                toast.success('Paseo creado correctamente')
            } else {
                toast.error('Ups, algo salio mal.')
            }
        } catch (error) {
            console.log(error);
            toast.error("Paila!")

        }

    }

    const owner = useSelector(state => state.users.profile)
    const petsByOwner = useSelector(state => state.pets.pets)

    const dispatch = useDispatch();
    const getPetsOwner = async () => {
        let response = await axios.get(`http://localhost:3000/api/pets/${owner._id}`)
        dispatch(setPets(response.data))
        console.log(response.data);

    }

    useEffect(() => {
        getPetsOwner()
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
                <h2 className='text-3xl font-bold text-left mb-4'>Reserva tu paseo</h2>
                <form className='flex flex-col gap-2 w-[450px]'>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Fecha</label>
                        <input onChange={handleChange} type='date' name='dateWalk'
                            className='border-2 py-2 px-4 placeholder:text rounded-xl'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Hora de incio del paseo</label>
                        <input onChange={handleChange} type='time' name='startTimeWalk'
                            className='border-2 py-2 px-4 placeholder:text rounded-xl'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Duracion del paseo</label>
                        <input onChange={handleChange} type='number' name='timeWalk' placeholder='Escribe la duracion del paseo...'
                            className='border-2 py-2 px-4 placeholder:text rounded-xl'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Recomendaciones del paseo</label>
                        <input onChange={handleChange} type='text' name='newsWalk' placeholder='Escribe cosas a tener en cuenta...'
                            className='border-2 py-2 px-4 placeholder:text rounded-xl'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Selecciona tu mascota</label>
                        <select onChange={handleChange} name='pet' className='border-2 py-2 px-4 placeholder:text rounded-xl'>
                            <option selected disabled>Selecciona un tipo de documento</option>
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
                    </div>
                    <button onClick={handleSubmit} className='bg-primaryColor rounded-xl text-white py-2 px-4 mt-2' >Reservar</button>
                </form>
            </div>
        </div>
    )
}

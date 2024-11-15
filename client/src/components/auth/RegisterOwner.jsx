import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/walkers';

export default function RegisterOwner() {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: '',
        lastName: '',
        photo: '',
        email: '',
        password: '',
        contactPhone: '',
        adressOwner: ''
    })

    const user = {
        name: input.name,
        lastName: input.lastName,
        photo: input.photo,
        email: input.email,
        password: input.password,
        role: 'Duenio',
        duenioInfo: {
            contactPhone: input.contactPhone,
            adressOwner: input.adressOwner
        },
    }

    const newUserWalker = async () => {
        await api.post('register', user)
    }


    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.name + " ==> " + e.target.value);
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        newUserWalker()
        navigate('/login')
    }

    return (
        <section>
            <div className=' w-11/12 h-screen flex flex-col m-auto  items-center py-12'>

                <form className='w-7/12 m-auto flex flex-col gap-2'>
                    <h2 className='text-4xl font-bold text-center'>Crea tu cuenta de dueño</h2>
                    <p className='text-center pb-6'>Ingresa tus credenciales</p>
                    <div className='flex gap-4'>
                        <div className='flex flex-col w-4/12 gap-2'>
                            <label className='font-semibold'>Nombres</label>
                            <input onChange={handleChange} type='text' name='name' placeholder='Escribe tu nombre...'
                                className='border-2 py-2 px-4 placeholder:text rounded-xl'
                            />
                        </div>
                        <div className='flex flex-col w-4/12 gap-2'>
                            <label className='font-semibold'>Apellido</label>
                            <input onChange={handleChange} type='text' name='lastName' placeholder='Escribe tu apellido...'
                                className='border-2 py-2 px-4 placeholder:text rounded-xl'
                            />
                        </div>
                        <div className='flex flex-col w-4/12 gap-2'>
                            <label className='font-semibold'>Sube tu foto</label>
                            <input onChange={handleChange} type='text' name='photo' placeholder='Sube tu foto...'
                                className='border-2 py-2 px-4 placeholder:text rounded-xl'
                            />
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='w-3/6'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Numero de contacto</label>
                                <input onChange={handleChange} type='text' name='contactPhone' placeholder='Escribe tu numero de contacto...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Tu direccion</label>
                                <input onChange={handleChange} type='text' name='adressOwner' placeholder='Escribe tu numero de contacto...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                        </div>

                        <div className='w-3/6'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Email</label>
                                <input onChange={handleChange} type='text' name='email' placeholder='Escribe tu email...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Contrasena</label>
                                <input onChange={handleChange} type='text' name='password' placeholder='Escribe tu contrasena...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <button className='w-3/12 bg-primaryColor text-white py-2 px-4 mt-2 rounded-xl' onClick={handleSubmit}>Registarse</button>
                        <p className='text-center'>Ya tienes una cuenta? <Link to={'/login'}><span className='text-black font-bold'>Login</span></Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

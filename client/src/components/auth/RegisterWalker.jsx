import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/apiServices';

export default function RegisterWalker() {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: '',
        lastName: '',
        photo: '',
        email: '',
        password: '',
        description: '',
        experience: 0,
        idType: '',
        idNumber: '',
        contactPhone: '',
        walkerAddress: '',
        hourlyRate: 0
    })

    const user = {
        name: input.name,
        lastName: input.lastName,
        photo: input.photo,
        email: input.email,
        password: input.password,
        role: 'Paseador',
        paseadorInfo: {
            description: input.description,
            experience: input.experience,
            idType: input.idType,
            idNumber: input.idNumber,
            contactPhone: input.contactPhone,
            walkerAddress: input.walkerAddress,
            hourlyRate: input.hourlyRate
        },
    }

    const newUserWalker = async () => {
        let response = await api.post('register', user)
        if (response.status === 200) {
            navigate('/login')
        }
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
    }

    return (
        <section>
            <div className=' w-11/12 m-auto itmes-center py-12'>

                <form className='w-7/12 m-auto flex flex-col gap-2 bg-gray p-8 rounded-xl'>
                    <h2 className='text-4xl font-bold text-center text-primaryColor'>Crea tu cuenta de paseador</h2>
                    <p className='text-center pb-6'>Ingresa tus credenciales</p>
                    <div className='flex gap-4'>
                        <div className='w-3/6 flex flex-col gap-2'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Nombre</label>
                                <input onChange={handleChange} type='text' name='name' placeholder='Escribe tu nombre...'
                                    className=' py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Tipo de identificacion</label>
                                <select onChange={handleChange} name='idType' className=' py-2 px-4 placeholder:text rounded-xl'>
                                    <option selected disabled>Selecciona un tipo de documento</option>
                                    <option>CC</option>
                                    <option>CE</option>
                                    <option>Pasaporte</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Numero de contacto</label>
                                <input onChange={handleChange} type='text' name='contactPhone' placeholder='Escribe tu numero de contacto...'
                                    className=' py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Description</label>
                                <textarea onChange={handleChange} type='text' name='description' placeholder='Escribe tu descripcion...'
                                    className=' py-2 px-4 placeholder:text rounded-xl h-[200px]' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Email</label>
                                <input onChange={handleChange} type='email' name='email' placeholder='Escribe tu email...'
                                    className=' py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>

                        </div>

                        <div className='w-3/6 flex flex-col gap-2'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Apellido</label>
                                <input onChange={handleChange} type='text' name='lastName' placeholder='Escribe tu numero de contacto...'
                                    className=' py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Numero de identificacion</label>
                                <input onChange={handleChange} type='text' name='idNumber' placeholder='Escribe tu numero de identificacion...'
                                    className=' py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Sube tu foto</label>
                                <input onChange={handleChange} type='text' name='photo' placeholder='Escribe tu numero de contacto...'
                                    className=' py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Tu direccion</label>
                                <input onChange={handleChange} type='text' name='walkerAddress' placeholder='Escribe tu numero de contacto...'
                                    className=' py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Tarifa por hora</label>
                                <input onChange={handleChange} type='number' name='hourlyRate' placeholder='Escribe tu numero de contacto...'
                                    className=' py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Experiencia</label>
                                <input onChange={handleChange} type='number' name='experience' placeholder='Escribe tu experiencia...'
                                    className=' py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Contrasena</label>
                                <input onChange={handleChange} type='password' name='password' placeholder='Escribe tu contrasena...'
                                    className=' py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='bg-primaryColor text-white py-2 px-4 mt-2 rounded-xl' onClick={handleSubmit}>Registarse</button>
                        <p className='text-center'>Ya tienes una cuenta? <Link to={'/login'}><span className='text-primaryColor font-bold'>Login</span></Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

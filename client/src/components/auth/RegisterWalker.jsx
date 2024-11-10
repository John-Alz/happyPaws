import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function RegisterWalker() {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: '',
        photo: '',
        email: '',
        password: '',
        idType: '',
        idNumber: '',
        contactPhone: '',
        companyPhone: '',
        companyAddress: '',
        walkerPhoto: '',
        hourlyRate: 0
    })

    const user = {
        name: input.name,
        photo: input.photo,
        email: input.email,
        password: input.password,
        role: 'Paseador',
        paseadorInfo: {
            idType: input.idType,
            idNumber: input.idNumber,
            contactPhone: input.contactPhone,
            companyPhone: input.companyPhone,
            companyAddress: input.companyAddress,
            hourlyRate: input.hourlyRate
        },
    }

    const newUserWalker = async () => {
        let newUser = await axios.post('http://localhost:3000/api/register', user)
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
            <div className=' w-11/12 m-auto itmes-center py-12'>
                <form className='w-3/12 m-auto flex flex-col gap-2'>
                    <h2 className='text-4xl font-bold text-center'>Crea tu cuenta de paseador</h2>
                    <p className='text-center pb-6'>Ingresa tus credenciales</p>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Nombres</label>
                        <input onChange={handleChange} type='text' name='name' placeholder='Escribe tu nombre...'
                            className='border-2 py-2 px-4 placeholder:text'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Tipo de identificacion</label>
                        <select onChange={handleChange} name='idType' className='border-2 py-2 px-4 placeholder:text'>
                            <option selected disabled>Selecciona un tipo de documento</option>
                            <option>CC</option>
                            <option>TI</option>
                        </select>
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Numero de identificacion</label>
                        <input onChange={handleChange} type='text' name='idNumber' placeholder='Escribe tu numero de identificacion...'
                            className='border-2 py-2 px-4 placeholder:text'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Numero de contacto</label>
                        <input onChange={handleChange} type='text' name='contactPhone' placeholder='Escribe tu numero de contacto...'
                            className='border-2 py-2 px-4 placeholder:text'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Numero de contacto empresa</label>
                        <input onChange={handleChange} type='text' name='companyPhone' placeholder='Escribe tu numero de contacto tu empresa...'
                            className='border-2 py-2 px-4 placeholder:text'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Direccion de tu empresa</label>
                        <input onChange={handleChange} type='text' name='companyAddress' placeholder='Escribe tu numero de contacto...'
                            className='border-2 py-2 px-4 placeholder:text'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Tarifa por hora</label>
                        <input onChange={handleChange} type='number' name='hourlyRate' placeholder='Escribe tu numero de contacto...'
                            className='border-2 py-2 px-4 placeholder:text'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Sube tu foto</label>
                        <input onChange={handleChange} type='text' name='photo' placeholder='Escribe tu numero de contacto...'
                            className='border-2 py-2 px-4 placeholder:text'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Email</label>
                        <input onChange={handleChange} type='text' name='email' placeholder='Escribe tu email...'
                            className='border-2 py-2 px-4 placeholder:text'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Contrasena</label>
                        <input onChange={handleChange} type='text' name='password' placeholder='Escribe tu contrasena...'
                            className='border-2 py-2 px-4 placeholder:text'
                        />
                    </div>
                    <button className='bg-black text-white py-2 px-4 mt-2' onClick={handleSubmit}>Registarse</button>
                    <p className='text-center'>Ya tienes una cuenta? <Link to={'/login'}><span className='text-black font-bold'>Login</span></Link></p>
                </form>
            </div>
        </section>
    )
}

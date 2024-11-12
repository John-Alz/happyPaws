import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setLogin } from '../../redux/usersSlice';

export default function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(state => state.users.login)
    const profile = useSelector(state => state.users.profile)


    const userLogin = async () => {
        let response = await axios.post('http://localhost:3000/api/login', user, { withCredentials: true })
        if (response.status === 200) {
            navigate('/')
        }
    }


    const handleChange = (e) => {
        e.preventDefault();
        let { name, value } = e.target;
        console.log(e.target.name + " ==> " + e.target.value);
        dispatch(setLogin({ name, value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        userLogin()
    }

    return (
        <section>
            <div className='w-11/12 h-screen flex flex-col m-auto  items-center py-12'>
                <form className='w-3/11 m-auto flex flex-col gap-2'>
                    <h2 className='text-4xl font-bold text-center'>Ingresa a tu cuenta</h2>
                    <p className='text-center pb-6'>Bienvenido de vuelta, Ingresa tus credenciales</p>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Email</label>
                        <input onChange={handleChange} type='text' name='email' placeholder='Escribe tu email...'
                            className='border-2 py-2 px-4 placeholder:text rounded-xl'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold'>Contrasena</label>
                        <input onChange={handleChange} type='text' name='password' placeholder='Escribe tu contrasena...'
                            className='border-2 py-2 px-4 placeholder:text rounded-xl'
                        />
                    </div>
                    <button className='bg-primaryColor text-white py-2 px-4 mt-2 rounded-xl' onClick={handleSubmit}>Registarse</button>
                    <p className='text-center'>No tienes una cuenta? <Link to={'/register'}><span className='text-black font-bold'>Registrate</span></Link></p>
                </form>
            </div>
        </section>
    )
}

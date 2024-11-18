import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '../redux/usersSlice'
import Cookies from 'js-cookie'
import { setPets } from '../redux/petsSlice'
import { api } from '../services/apiServices.js'

export default function Header() {

    const [open, setOpen] = useState(false)

    const dispatch = useDispatch();

    let profile = useSelector(state => state.users.profile)
    console.log(profile);

    let sizeProfile = Object.keys(profile).length;


    const logout = async () => {
        api.post('logout', { withCredentials: true })
        Cookies.remove('token')
    }

    const handleSubmit = () => {
        logout()
        dispatch(getUserProfile(''))
        dispatch(setPets(''))
        console.log("CERRO SESION");

    }

    return (
        <header className='w-9/12 h-16 bg-white shadow-sm m-auto px-4 mt-6 flex justify-between items-center rounded-[20px] absolute left-0 right-0 '>
            <Link to={'/'}>
                <div className='flex gap-2'>
                    <img className='w-[40px] h-[40px]' src={logo} alt='logoDog' />
                    <h1 className='text-4xl font-bold'>HappyPaws</h1>
                </div>
            </Link>

            <nav>
                <ul className='flex gap-10 items-center'>
                    <NavLink className={({ isActive }) => (isActive ? "border-b-2 border-primaryColor text-primaryColor font-semibold" : null)} to={'/'}><li className='text-lg font-semobold px-2'>Inicio</li></NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "border-b-2 border-primaryColor text-primaryColor font-semibold" : null)} to={'/paseadores'}><li className='text-lg font-semobold px-2'>Paseadores</li></NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "border-b-2 border-primaryColor text-primaryColor font-semibold" : null)} to={'/sobre-nosotros'}><li className='text-lg font-semobold px-2'>Sobre nosotros</li></NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "border-b-2 border-primaryColor text-primaryColor font-semibold" : null)} to={'/contactanos'}><li className='text-lg font-semobold px-2'>Contactanos</li></NavLink>

                </ul>
            </nav>
            {
                sizeProfile > 0 ? <button className='relative flex justify-center cursor-pointer' onClick={() => setOpen(!open)}><img className='w-12 h-12 rounded-full' src={profile.photo} alt={profile.name} />
                    {
                        open ? <div className='flex flex-col gap-4 w-36 absolute top-14 bg-white p-4 rounded-lg z-10'>
                            {
                                sizeProfile > 0 ? <button className='hover:text-primaryColor' onClick={handleSubmit}>Cerrar sesion</button> : null
                            }
                            <Link to={'/perfil'}><p className='hover:text-primaryColor'>Perfil</p></Link>
                        </div> : null
                    }
                </button> : <Link to={'/login'}><button className='text-lg font-semobold bg-black rounded-xl py-2 px-4 text-white decoration-none'>Iniciar sesion</button></Link>
            }
        </header >
    )
}

import React, { useEffect, useState } from 'react'
import RegisterOwner from '../auth/RegisterOwner'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../services/apiServices';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleUser } from '../../redux/usersSlice';

export default function FormInfoOwner() {

    const params = useParams();
    const dispatch = useDispatch();

    const user = useSelector(state => state.users.singleUser)

    const getInitialState = () => ({
        name: '',
        lastName: '',
        photo: '',
        email: '',
        password: '',
        idNumber: '',
        contactPhone: '',
        adressOwner: '',
    })


    const [input, setInput] = useState(getInitialState)

    const owner = {
        name: input.name,
        lastName: input.lastName,
        photo: input.photo,
        email: input.email,
        password: input.password,
        role: 'Duenio',
        duenioInfo: {
            idNumber: input.idNumber,
            contactPhone: input.contactPhone,
            adressOwner: input.adressOwner
        },
    }

    const actionOwner = async () => {
        try {
            const endPonit = params.id ? `user/${params.id}` : 'register';
            const method = params.id ? api.put : api.post;

            const response = await method(endPonit, owner);
            console.log(`${params.id ? 'PUT' : 'POST'} USER:`, response);

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const getUser = async () => {
            if (params.id) {
                try {
                    const response = await api.get(`user/${params.id}`)
                    dispatch(setSingleUser(response))
                    setInput({
                        name: response?.name || '',
                        lastName: response?.lastName || '',
                        photo: response?.photo || '',
                        email: response?.email || '',
                        password: response?.password || '',
                        idNumber: response?.duenioInfo?.idNumber || '',
                        contactPhone: response?.duenioInfo?.contactPhone || '',
                        adressOwner: response?.duenioInfo?.adressOwner || '',
                    })
                } catch (error) {
                    console.error(error)
                }
            } else {
                setInput(getInitialState())
            }
        }
        getUser()
    }, [params.id, dispatch])


    console.log(user);

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
        actionOwner()
    }

    console.log(input);


    return (
        <div>
            <section>
                <div className=' h-screen flex flex-col m-auto  items-center py-12'>
                    <div className='w-11/12 mb-8'>
                        <h2 className='text-2xl font-semibold'>Editando a {input.name}</h2>
                    </div>
                    <form className='w-11/12  flex flex-col gap-2'>
                        <div className='flex gap-4'>
                            <div className='flex flex-col w-4/12 gap-2'>
                                <label className='font-semibold'>Nombres</label>
                                <input onChange={handleChange} type='text' value={input.name} name='name' placeholder='Escribe tu nombre...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col w-4/12 gap-2'>
                                <label className='font-semibold'>Apellido</label>
                                <input onChange={handleChange} type='text' value={input.lastName} name='lastName' placeholder='Escribe tu apellido...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col w-4/12 gap-2'>
                                <label className='font-semibold'>Sube tu foto</label>
                                <input onChange={handleChange} type='text' value={input.photo} name='photo' placeholder='Sube tu foto...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='w-3/6 flex flex-col gap-2'>
                                <label className='font-semibold'>Tu direccion</label>
                                <input onChange={handleChange} type='text' value={input.adressOwner} name='adressOwner' placeholder='Escribe tu direccion...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='w-3/6 flex flex-col gap-2'>
                                <label className='font-semibold'>Tu identificacion</label>
                                <input onChange={handleChange} type='text' value={input.idNumber} name='idNumber' placeholder='Escribe tu numero de identificacion...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                        </div>
                        <div className=' flex gap-4'>
                            <div className='w-3/6 flex  flex-col gap-2'>
                                <label className='font-semibold'>Numero de contacto</label>
                                <input onChange={handleChange} type='text' value={input.contactPhone} name='contactPhone' placeholder='Escribe tu numero de contacto...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='w-3/6 flex flex-col gap-2'>
                                <label className='font-semibold'>Email</label>
                                <input onChange={handleChange} type='text' value={input.email} name='email' placeholder='Escribe tu email...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            {
                                !params.id ? <div className='w-3/6 flex flex-col gap-2'>
                                    <label className='font-semibold'>Contrasena</label>
                                    <input onChange={handleChange} type='text' name='password' placeholder='Escribe tu contrasena...'
                                        className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                    />
                                </div> : null
                            }
                        </div>

                        <div className='flex items-center gap-4'>
                            <button className=' bg-primaryColor text-white py-2 px-4 mt-2 rounded-xl' onClick={handleSubmit} >Guardar cambios</button>
                            <Link to={'/perfil/usuarios'}><button className='bg-primaryColor text-white py-2 px-4 mt-2 rounded-xl'>Cancelar</button></Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>

    )
}

import React, { useEffect, useState } from 'react'
import RegisterOwner from '../auth/RegisterOwner'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../services/apiServices';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleUser } from '../../redux/usersSlice';

export default function FormInfoWalker() {

    const params = useParams();
    const dispatch = useDispatch();

    const user = useSelector(state => state.users.singleUser)

    const getInitialState = () => ({
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
        companyPhone: '',
        companyAddress: '',
        walkerPhoto: '',
        hourlyRate: 0
    })


    const [input, setInput] = useState(getInitialState)

    const walker = {
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
            companyPhone: input.companyPhone,
            companyAddress: input.companyAddress,
            hourlyRate: input.hourlyRate
        },
    }

    const actionWalker = async () => {
        try {
            const endPonit = params.id ? `user/${params.id}` : 'register';
            const method = params.id ? api.put : api.post;

            const response = await method(endPonit, walker);
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
                        description: response?.paseadorInfo?.description || '',
                        experience: response?.paseadorInfo?.experience || 0,
                        idType: response?.paseadorInfo?.idType || '',
                        idNumber: response?.paseadorInfo?.idNumber || '',
                        contactPhone: response?.paseadorInfo?.companyPhone || '',
                        companyPhone: response?.paseadorInfo?.companyPhone || '',
                        companyAddress: response?.paseadorInfo?.companyAddress || '',
                        hourlyRate: response?.paseadorInfo?.hourlyRate || 0
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
        actionWalker()
    }

    console.log(input);


    return (
        <section>
            <div className=' w-11/12 m-auto itmes-center py-12'>
                <form className='m-auto flex flex-col gap-2'>
                    <div className='flex gap-4'>
                        <div className='w-3/6'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Nombre</label>
                                <input onChange={handleChange} type='text' value={input.name} name='name' placeholder='Escribe tu nombre...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Tipo de identificacion</label>
                                <select onChange={handleChange} value={input.idType} name='idType' className='border-2 py-2 px-4 placeholder:text rounded-xl'>
                                    <option selected disabled>Selecciona un tipo de documento</option>
                                    <option>CC</option>
                                    <option>TI</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Numero de contacto</label>
                                <input onChange={handleChange} type='text' value={input.contactPhone} name='contactPhone' placeholder='Escribe tu numero de contacto...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Numero de contacto empresa</label>
                                <input onChange={handleChange} type='text' value={input.companyPhone} name='companyPhone' placeholder='Escribe tu numero de contacto tu empresa...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Description</label>
                                <textarea onChange={handleChange} type='text' value={input.description} name='description' placeholder='Escribe tu descripcion...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl h-[120px]' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Email</label>
                                <input onChange={handleChange} type='text' value={input.email} name='email' placeholder='Escribe tu email...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>

                        </div>

                        <div className='w-3/6'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Apellido</label>
                                <input onChange={handleChange} type='text' value={input.lastName} name='lastName' placeholder='Escribe tu numero de contacto...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Numero de identificacion</label>
                                <input onChange={handleChange} type='text' value={input.idNumber} name='idNumber' placeholder='Escribe tu numero de identificacion...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Sube tu foto</label>
                                <input onChange={handleChange} type='text' value={input.photo} name='photo' placeholder='Escribe tu numero de contacto...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Direccion de tu empresa</label>
                                <input onChange={handleChange} type='text' value={input.companyAddress} name='companyAddress' placeholder='Escribe tu numero de contacto...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Tarifa por hora</label>
                                <input onChange={handleChange} type='number' value={input.hourlyRate} name='hourlyRate' placeholder='Escribe tu numero de contacto...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Experiencia</label>
                                <input onChange={handleChange} type='number' value={input.experience} name='experience' placeholder='Escribe tu experiencia...'
                                    className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                />
                            </div>
                            {
                                !params.id ? <div className='flex flex-col gap-2'>
                                    <label className='font-semibold'>Contrasena</label>
                                    <input onChange={handleChange} type='text' name='password' placeholder='Escribe tu contrasena...'
                                        className='border-2 py-2 px-4 placeholder:text rounded-xl'
                                    />
                                </div> : null
                            }
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <button className='bg-primaryColor text-white py-2 px-4 mt-2 rounded-xl' onClick={handleSubmit}>Guardar cambios</button>
                        <Link to={'/perfil/usuarios'}><button className='bg-primaryColor text-white py-2 px-4 mt-2 rounded-xl'>Cancelar</button></Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

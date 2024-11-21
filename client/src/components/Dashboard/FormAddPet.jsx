import React, { useEffect, useState } from 'react'
import { api } from '../../services/apiServices'
import { useDispatch, useSelector } from 'react-redux'
import { setOwners } from '../../redux/usersSlice';
import { Link, useParams } from 'react-router-dom';
import { setPet } from '../../redux/petsSlice';

export default function FormAddPet() {

    const dispatch = useDispatch();
    const params = useParams();
    const owners = useSelector(state => state.users.owners)
    const pet = useSelector(state => state.pets.pet)

    const [input, setInput] = useState({
        petName: '',
        petAge: '',
        petBreed: '',
        petGender: '',
        petRecomendations: '',
        owner: '',
    })

    // CRUD

    const getOwners = async () => {
        try {
            let response = await api.get('users/Duenio');
            dispatch(setOwners(response))
        } catch (error) {

        }
    }

    const actionsPet = async () => {

        let endPonit = params.id ? `pet/${params.id}` : '/pets';
        let method = params.id ? api.put : api.post;

        try {
            let response = await method(endPonit, input)
            console.log(response);
        } catch (error) {
            console.error(error)
        }
    }

    const getPet = async () => {
        try {
            let response = await api.get(`pet/${params.id}`)
            dispatch(setPet(response))
            setInput({
                petName: response?.petName || '',
                petAge: response?.petAge || '',
                petBreed: response?.petBreed || '',
                petGender: response?.petGender || '',
                petRecomendations: response?.petRecomendations || '',
                owner: response?.owner?._id || '',
            })
        } catch (error) {
            console.error(error);
        }
    }

    //

    useEffect(() => {
        getOwners();
        getPet();
    }, [])

    const handleChnage = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log(name, value);
        setInput({
            ...input,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        actionsPet()
        setInput({
            petName: '',
            petAge: '',
            petBreed: '',
            petGender: '',
            petRecomendations: '',
            owner: '',
        })
    }

    console.log(pet);


    return (
        <div>
            <form className='bg-gray p-8 rounded-xl'>
                <div className='flex gap-4'>
                    <div className='w-4/12 flex flex-col mb-2'>
                        <label className='font-semibold'>Nombre</label>
                        <input type='text' onChange={handleChnage} value={input.petName} name='petName' placeholder='Escribe el nombre la mascota...'
                            className=' py-2 px-4 placeholder:text rounded-xl'
                        />
                    </div>
                    <div className='w-4/12 flex flex-col '>
                        <label className='font-semibold'>Edad</label>
                        <input type='number' value={input.petAge} name='petAge' onChange={handleChnage} placeholder='Escribe la edad...'
                            className=' py-2 px-4 placeholder:text rounded-xl'
                        />
                    </div>
                    <div className='w-4/12 flex flex-col '>
                        <label className='font-semibold'>Raza</label>
                        <input type='text' value={input.petBreed} name='petBreed' onChange={handleChnage} placeholder='Escribe la raza...'
                            className=' py-2 px-4 placeholder:text rounded-xl'
                        />
                    </div>
                </div>
                <div className='flex gap-4 mb-2'>
                    <div className='w-3/6 flex flex-col '>
                        <label className='font-semibold'>Genero</label>
                        <select name='petGender' value={params.id ? input.petGender : null} onChange={handleChnage} className=' py-2 px-4 placeholder:text rounded-xl'>
                            <option selected disabled>Selecciona el genero</option>
                            <option>Macho</option>
                            <option>Hembra</option>
                        </select>
                    </div>
                    <div className='w-3/6 flex flex-col '>
                        <label className='font-semibold'>Duenio</label>
                        <select className=' py-2 px-4 placeholder:text rounded-xl' value={params.id ? input.owner : null} name='owner' onChange={handleChnage}>
                            <option selected disabled>Selecciona un duenio</option>
                            {
                                owners?.map((owner, i) => {
                                    return (
                                        <>
                                            <option value={owner._id}>{owner.name}</option>
                                        </>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='w-full flex flex-col '>
                        <label className='font-semibold'>Recomendaciones</label>
                        <textarea className=' py-2 px-4 placeholder:text rounded-xl' value={input.petRecomendations} name='petRecomendations' onChange={handleChnage} placeholder='Escribe recomendaciones...' />
                    </div>
                </div>
                <div className='flex gap-4'>
                    <button className='bg-primaryColor text-white py-2 px-4 mt-2 rounded-xl' onClick={handleSubmit}>Guargar</button>
                    <Link to={'/perfil/mascotas'}><button className='bg-primaryColor text-white py-2 px-4 mt-2 rounded-xl'>Cancelar</button></Link>
                </div>
            </form >
        </div >
    )
}



import React, { useEffect } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { api } from '../../services/apiServices';
import { setPets } from '../../redux/petsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PetsList() {

    const data = useSelector(state => state.pets.pets)
    console.log(data);


    const dispatch = useDispatch();

    // funciones crud

    const getPets = async () => {
        try {
            let response = await api.get('pets');
            dispatch(setPets(response))
        } catch (error) {
            console.error(error);
        }
    }

    const deletePet = async (e) => {

        let idDelete = e.currentTarget.value;
        console.log(idDelete);

        try {
            let response = await api.delete(`pet/${idDelete}`);
            console.log(response);
            if (response.status === 200) {
                toast.success('Mascota eliminada correctamente')
                getPets();
            } else {
                toast.error("Hubo un error")
            }
        } catch (error) {
            console.error
        }
    }

    //

    useEffect(() => {
        getPets()
    }, []);


    return (
        <div className='w-11/12 m-auto'>
            <ToastContainer />
            <div className='flex items-center justify-between'>
                <div className='mb-12 mt-12'>
                    <h2 className='text-2xl font-semibold'>Lista de mascotas</h2>
                    <p>Mira toda la informacion de las mascotas</p>
                </div>
                <div>
                    <Link to={'/perfil/mascotas/nuevo'}><button className='bg-primaryColor py-2 px-4 rounded-xl text-white'>Nueva mascota</button></Link>
                </div>
            </div>
            <table className='min-w-full  text-base font-light text-surface bg-gray rounded-xl'>
                <thead className=" border-b border-[#ced4da] ">
                    <tr>
                        <th className="px-6 py-3 text-start text-sm font-bold opacity-50 uppercase">Nombre</th>
                        <th className="px-6 py-3 text-start text-sm font-bold opacity-50 uppercase">Edad</th>
                        <th className="px-6 py-3 text-start text-sm font-bold opacity-50 uppercase">Raza</th>
                        <th className="px-6 py-3 text-start text-sm font-bold opacity-50 uppercase">Genero</th>
                        <th className="px-6 py-3 text-start text-sm font-bold opacity-50 uppercase">Duenio</th>
                        <th className="px-6 py-3 text-start text-sm font-bold opacity-50 uppercase">Acciones</th>
                    </tr>
                </thead>
                <tbody className='font-medium'>
                    {
                        data ? data.map((pet, i) => {
                            return (
                                <tr key={i} className='hover:bg-grayDark border-b border-[#ced4da]'>
                                    <td className="px-6 py-4 text-sm">{pet.petName}</td>
                                    <td className="px-6 py-4 text-sm">{pet.petAge} Años</td>
                                    <td className="px-6 py-4 text-sm">{pet.petBreed}</td>
                                    <td className="px-6 py-4 text-sm">{pet.petGender}</td>
                                    <td className="px-6 py-4 text-sm">{pet.owner?.name}</td>
                                    <td className='px-4 py-2 text-sm'>
                                        <div className='flex items-center gap-4'>
                                            <Link to={`/perfil/mascotas/edit/${pet._id}`} ><MdEdit color="green" size={24} /></Link>
                                            <button name="delete" value={pet._id} onClick={deletePet} ><MdDelete color="red" size={24} /></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }) : null
                    }

                </tbody>
            </table>
        </div>
    )
}

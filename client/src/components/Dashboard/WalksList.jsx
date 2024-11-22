import React, { useEffect } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { api } from '../../services/apiServices';
import { setWalks } from '../../redux/walksSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function WalksList() {

    const dispatch = useDispatch();

    const data = useSelector(state => state.walks.walks);

    const getWalks = async () => {
        try {
            let response = await api.get('walks');
            dispatch(setWalks(response))
        } catch (error) {
            console.error(error)
        }
    }

    const deleteWalk = async (e) => {

        let idDelete = e.currentTarget.value;
        console.log(idDelete);

        try {
            let response = await api.delete(`walk/${idDelete}`)
            if (response.status === 200) {
                toast.success('Paseo eliminado correctame')
            } else {
                toast.error("Hubo un error")
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getWalks()
    }, [])



    return (
        <div className='w-11/12 m-auto'>
            <ToastContainer />
            <div className='flex items-center justify-between'>
                <div className='mb-12 mt-12'>
                    <h2 className='text-2xl font-semibold'>Lista de paseos</h2>
                    <p>Mira toda la informacion de los pasesos</p>
                </div>
                <div>
                    <Link to={'/perfil/paseos/nuevo'}><button className='bg-primaryColor py-2 px-4 rounded-xl text-white'>Nuevo paseo</button></Link>
                </div>
            </div>
            <table className='min-w-full  text-base font-light text-surface bg-gray p-8 rounded-xl'>
                <thead className=" border-b border-[#ced4da] ">
                    <tr>
                        <th className="px-6 py-3 text-start text-sm font-bold  opacity-50 uppercase">Paseador</th>
                        <th className="px-6 py-3 text-start text-sm font-bold  opacity-50 uppercase">Mascota</th>
                        <th className="px-6 py-3 text-start text-sm font-bold  opacity-50 uppercase">Fecha</th>
                        <th className="px-6 py-3 text-start text-sm font-bold  opacity-50 uppercase">H. inicio</th>
                        <th className="px-6 py-3 text-start text-sm font-bold  opacity-50 uppercase">Duracion</th>
                        <th className="px-6 py-3 text-start text-sm font-bold  opacity-50 uppercase">Acciones</th>
                    </tr>
                </thead>
                <tbody className='font-medium'>
                    {
                        data?.map((walk, i) => {
                            return (
                                <tr className='hover:bg-grayDark border-b border-[#ced4da]'>
                                    <td className="px-6 py-4 text-sm">
                                        <div className='flex items-center gap-4'>
                                            <img className='w-14 h-14 rounded-full' src={walk?.walker?.photo} />
                                            <p className='font-semibold'>{walk.walker.name}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm">{walk?.pet?.petName}</td>
                                    <td className="px-6 py-4 text-sm">{walk.dateWalk.slice(0, 10)}</td>
                                    <td className="px-6 py-4 text-sm">{walk.startTimeWalk}</td>
                                    <td className="px-6 py-4 text-sm">{walk.timeWalk} horas</td>
                                    <td className='px-4 py-2 text-sm'>
                                        <div className='flex items-center gap-4'>
                                            <Link to={`/perfil/paseos/edit/${walk._id}`} ><MdEdit color="green" size={24} /></Link>
                                            <button name="delete" value={walk._id} onClick={deleteWalk}><MdDelete color="red" size={24} /></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

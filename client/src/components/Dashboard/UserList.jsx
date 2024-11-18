import { MdDelete, MdEdit } from "react-icons/md";
import { api } from "../../services/apiServices";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../redux/usersSlice";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";




export default function UserList() {

    let [flag, setFlag] = useState(false)

    const dispatch = useDispatch();

    const data = useSelector(state => state.users.users);

    const getUsers = async (role) => {
        if (role === 'all') {
            let response = await api.get('users')
            dispatch(setUsers(response))
        } else if (role === 'walkers') {
            let response = await api.get('users/Paseador')
            dispatch(setUsers(response))
        } else if (role === 'owners') {
            let response = await api.get('users/Duenio')
            dispatch(setUsers(response))
        }
    }

    const handleRol = (e) => {
        let role = e.target.value;
        console.log(role);
        getUsers(role);
    }

    console.log(data);

    const deleteUser = async (e) => {
        e.preventDefault();

        console.log("e.target" + "==>" + e.target);
        console.log("e.target.value" + "==>" + e.target.value);


        let idDelete = e.currentTarget.value;
        console.log(`idDelete ==> ${idDelete}`);

        try {
            let response = await api.delete(`user/${idDelete}`)
            if (response === 200) {
                toast.success("Se elemino el usuario")
            } else {
                toast.error("Hubo un error")
            }
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getUsers()
    }, [deleteUser])


    return (
        <div>
            <ToastContainer />
            <div className="flex justify-between mb-8 mt-4 items-center">
                <div className='w-2/6 flex flex-col justify-around py-1 gap-2 rounded-xl bg-grayBg shrink-0 sm:flex-row'>
                    <button onClick={handleRol} value='all' className='bg-primaryColor py-2 px-4 rounded-xl text-white'>Ver todos</button>
                    <button onClick={handleRol} value='walkers' className=' py-2 px-4 rounded-xl '>Paseadores</button>
                    <button onClick={handleRol} value='owners' className=' py-2 px-4 rounded-xl '>Duenios</button>
                </div>
                <div className="flex gap-4 items-center">
                    <form className="relative">
                        <input className="w-[300px] border py-2 px-4 rounded-xl" type="text" placeholder="Busca por nombre..." />
                        <button className="absolute right-2 top-2"><IoIosSearch size={28} className="text-black opacity-30" /></button>
                    </form>
                    <button className="flex items-center bg-primaryColor py-2 px-4 rounded-xl text-white"><IoAdd size={24} fontWeight={700} />
                        Nuevo usuario</button>
                </div>
            </div>
            <table className='min-w-full text-center text-base font-light text-surface '>
                <thead className="border-b border-neutral-200 ">
                    <tr>
                        <th className="text-left">Nombre</th>
                        <th>Role</th>
                        <th>ID numero</th>
                        <th>Telefono</th>
                        <th>Direccion</th>
                        <th>Registrado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((user, i) => {
                            return (
                                <tr key={i} className="border-b text-sm border-neutral-200 ">
                                    <td>
                                        <div className='flex items-center gap-2'>
                                            <img className='w-14 h-14 rounded-full' src={user.photo} alt='foto' />
                                            <div className='text-left'>
                                                <p>{user.name} {user.lastName}</p>
                                                <p>{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.role}</td>
                                    <td>{user.adminInfo ? user.adminInfo.idNumber : null || user.paseadorInfo ? user.paseadorInfo.idNumber : null || user.duenioInfo ? user.duenioInfo.idNumber : null}</td>
                                    <td>{user.adminInfo ? user.adminInfo.contactPhone : null || user.paseadorInfo ? user.paseadorInfo.contactPhone : null || user.duenioInfo ? user.duenioInfo.contactPhone : null}</td>
                                    <td>{user.adminInfo ? user.adminInfo.adminAddress : null || user.paseadorInfo ? user.paseadorInfo.companyAddress : null || user.duenioInfo ? user.duenioInfo.adressOwner : null}</td>
                                    <td>{user.createdAt.slice(0, 10)}</td>
                                    <td>
                                        <div className='flex justify-center items-center gap-4'>
                                            <Link to={`/editUser/${user._id}`}><MdEdit color="green" size={24} /></Link>
                                            <button name="delete" value={user._id} onClick={deleteUser}><MdDelete color="red" size={24} /></button>
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

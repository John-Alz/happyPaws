import { MdDelete, MdEdit } from "react-icons/md";
import { api } from "../../services/apiServices";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../redux/usersSlice";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";




export default function UserList() {

    let [flag, setFlag] = useState(true)

    const dispatch = useDispatch();

    const data = useSelector(state => state.users.users);

    const getUsers = async (role) => {

        let response;
        switch (role) {
            case 'all':
                response = await api.get('users')
                dispatch(setUsers(response))
                break;
            case 'walkers':
                response = await api.get('users/Paseador')
                dispatch(setUsers(response))
                break;
            case 'owners':
                response = await api.get('users/Duenio')
                dispatch(setUsers(response))
                break;
            default:
                console.log('hubo un error');
                break;
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
            if (response.status === 200) {
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
                    <button onClick={handleRol} value='all' className='py-2 px-4 rounded-xl  focus:bg-primaryColor focus:text-white '>Ver todos</button>
                    <button onClick={handleRol} value='walkers' className=' py-2 px-4 rounded-xl focus:bg-primaryColor focus:text-white'>Paseadores</button>
                    <button onClick={handleRol} value='owners' className=' py-2 px-4 rounded-xl focus:bg-primaryColor focus:text-white'>Duenios</button>
                </div>
                <div className="flex gap-4 items-center">
                    <form className="relative">
                        <input className="w-[300px] border py-2 px-4 rounded-xl" type="text" placeholder="Busca por nombre..." />
                        <button className="absolute right-2 top-2"><IoIosSearch size={28} className="text-black opacity-30" /></button>
                    </form>

                    <button className="flex gap-2 relative bg-primaryColor py-2 px-4 rounded-xl text-white" onClick={() => setFlag(!flag)}>
                        {
                            !flag ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />
                        }
                        Nuevo usuario
                        {
                            !flag ?
                                <div className="w-[178px] flex justify-start flex-col absolute top-11 left-0 bg-primaryColor shadow-xl rounded-xl gap-4 text-white p-4 ">
                                    <Link to={'/perfil/usuarios/nuevo/pas'}><a>Paseador</a></Link>
                                    <Link to={'/perfil/usuarios/nuevo'}><a>Duenio</a></Link>
                                </div>
                                : null
                        }

                    </button>
                </div>
            </div>
            <table className='min-w-full  text-base font-light text-surface '>
                <thead className=" border-b border-[#ced4da] ">
                    <tr>
                        <th className="px-6 py-3 text-start text-sm font-bold text-gray-500 uppercase">Nombre</th>
                        <th className="px-6 py-3 text-start text-sm font-bold text-gray-500 uppercase">Role</th>
                        <th className="px-6 py-3 text-start text-sm font-bold text-gray-500 uppercase">ID numero</th>
                        <th className="px-6 py-3 text-start text-sm font-bold text-gray-500 uppercase">Telefono</th>
                        <th className="px-6 py-3 text-start text-sm font-bold text-gray-500 uppercase">Direccion</th>
                        <th className="px-6 py-3 text-start text-sm font-bold text-gray-500 uppercase">Registrado</th>
                        <th className="px-6 py-3 text-start text-sm font-bold text-gray-500 uppercase">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((user, i) => {
                            return (
                                <tr key={i} className=" hover:bg-grayDark border-b border-[#ced4da]">
                                    <td className="px-4 py-2 text-sm">
                                        <div className='flex items-center gap-2'>
                                            <img className='w-14 h-14 rounded-full' src={user.photo} alt='foto' />
                                            <div className='text-left'>
                                                <p className="font-bold">{user.name} {user.lastName}</p>
                                                <p className="opacity-55 font-medium">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm">{user.role}</td>
                                    <td className="px-6 py-4 text-sm">{user.adminInfo ? user.adminInfo.idNumber : null || user.paseadorInfo ? user.paseadorInfo.idNumber : null || user.duenioInfo ? user.duenioInfo.idNumber : null}</td>
                                    <td className="px-6 py-4 text-sm">{user.adminInfo ? user.adminInfo.contactPhone : null || user.paseadorInfo ? user.paseadorInfo.contactPhone : null || user.duenioInfo ? user.duenioInfo.contactPhone : null}</td>
                                    <td className="px-6 py-4 text-sm">{user.adminInfo ? user.role : null || user.paseadorInfo ? user.paseadorInfo.companyAddress : null || user.duenioInfo ? user.duenioInfo.adressOwner : null}</td>
                                    <td className="px-6 py-4 text-sm">{user.createdAt.slice(0, 10)}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <div className='flex justify-center items-center gap-4'>
                                            <Link to={user.role === "Duenio" ? `/perfil/usuario/owner/${user._id}` : null || user.role === "Paseador" ? `/perfil/usuario/walker/${user._id}` : null}><MdEdit color="green" size={24} /></Link>
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

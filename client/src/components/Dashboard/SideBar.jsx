import logo from '../../assets/logo.png'
import { MdOutlinePets, MdFavorite, MdInfo, MdLogout } from "react-icons/md";
import { FaUser, FaUsers, FaWalking } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function SideBar() {

    let profile = useSelector(state => state.users.profile);
    console.log(profile);


    return (
        <div>
            <div className='h-screen border-r-2 border-grayDark w-52 flex flex-col justify-between py-4 pl-4'>
                <div className='flex flex-col gap-4'>
                    <Link to={'/'}>
                        <div className=' text-black py-2 px-4 flex items-center gap-2'>
                            <img className='w-[20px] h-[20px]' src={logo} alt='logoDog' />
                            <h1 className='text-xl font-bold'>HappyPaws</h1>
                        </div>
                    </Link>
                    <NavLink className={({ isActive }) => (isActive ? 'border-r-2 border-primaryColor' : 'opacity-45')} to={'/perfil/info'}>
                        <div className=' text-black py-2 px-4 flex items-center gap-2'>
                            <FaUser />
                            <a>informacion</a>
                        </div>
                    </NavLink>
                    {
                        profile.role === 'Administrador' ? <NavLink className={({ isActive }) => (isActive ? 'border-r-2 border-primaryColor' : 'opacity-60')} to={'/perfil/usuarios'}>
                            <div className=' text-black py-2 px-4 flex items-center gap-2'>
                                <FaUsers size={18} />
                                <a>Usuarios</a>
                            </div>
                        </NavLink> : null
                    }

                    <NavLink className={({ isActive }) => (isActive ? 'border-r-2 border-primaryColor' : 'opacity-60')} to={'/perfil/paseos'}>
                        <div className=' text-black py-2 px-4 flex items-center gap-2'>
                            <FaWalking size={18} />
                            <a>Paseos</a>
                        </div>
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'border-r-2 border-primaryColor' : 'opacity-60')} to={'/perfil/mascotas'}>
                        <div className=' text-black py-2 px-4 flex items-center gap-2'>
                            <MdOutlinePets size={18} />
                            <a>Mascotas</a>
                        </div>
                    </NavLink>


                </div>
                <div className=' text-primaryColor font-medium py-2 px-4 flex items-center gap-2'>
                    <MdLogout size={18} />
                    <a>Cerrar sesion</a>
                </div>
            </div>
        </div >
    )
}

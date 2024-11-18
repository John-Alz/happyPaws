import logo from '../../assets/logo.png'
import { MdOutlinePets, MdFavorite, MdInfo, MdLogout } from "react-icons/md";
import { FaUser, FaUsers, FaWalking } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";


export default function SideBar() {


    return (
        <div>
            <div className='border-r-2 border-grayDark h-screen w-52 flex flex-col justify-between py-4 pl-4'>
                <div className='flex flex-col gap-4'>
                    <Link to={'/'}>
                        <div className=' text-black py-2 px-4 flex items-center gap-2'>
                            <img className='w-[20px] h-[20px]' src={logo} alt='logoDog' />
                            <h1 className='text-xl font-bold'>HappyPaws</h1>
                        </div>
                    </Link>
                    <NavLink className={({ isActive }) => (isActive ? 'border-r-2 border-primaryColor' : 'opacity-45')} to={'/perfil'}>
                        <div className=' text-black py-2 px-4 flex items-center gap-2'>
                            <FaUser />
                            <a>informacion</a>
                        </div>
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'border-r-2 border-primaryColor' : 'opacity-60')} to={'/perfil/usuarios'}>
                        <div className=' text-black py-2 px-4 flex items-center gap-2'>
                            <FaUsers size={18} />
                            <a>Usuarios</a>
                        </div>
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'border-r-2 border-primaryColor' : 'opacity-60')} to={'/perfil/mascotas'}>
                        <div className=' text-black py-2 px-4 flex items-center gap-2'>
                            <FaWalking size={18} />
                            <a>Paseos</a>
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

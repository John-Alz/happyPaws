import logo from '../assets/logo.png'
import { FaSquareInstagram, FaSquareFacebook, FaSquareXTwitter, FaSquareWhatsapp } from "react-icons/fa6";


export default function Footer() {
    return (
        <footer className='bg-gray mt-12'>
            <div className='w-11/12 m-auto flex justify-between pt-12'>
                <div className='w-80 flex flex-col gap-8'>
                    <div className='flex items-center'>
                        <img className='w-[20px] h-[20px]' src={logo} alt='logoDog' />
                        <h1 className='text-xl font-bold'>HappyPaws</h1>
                    </div>
                    <p>Sed viverra eget fames sit varius. Pellentesque mattis libero viverra dictumst ornaresed justo convallis vitae</p>
                    <div className='flex gap-4'>
                        <FaSquareInstagram size={30} className='cursor-pointer' />
                        <FaSquareFacebook size={30} className='cursor-pointer' />
                        <FaSquareXTwitter size={30} className='cursor-pointer' />
                        <FaSquareWhatsapp size={30} className='cursor-pointer' />
                    </div>
                </div>
                <div className='leading-8'>
                    <h3 className='font-semibold'>Empresa</h3>
                    <p className='cursor-pointer'>Sobre nosotros</p>
                    <p className='cursor-pointer'>Blog</p>
                    <p className='cursor-pointer'>Lorem ipsum</p>
                    <p className='cursor-pointer'>Sobre nosotros</p>
                </div>
                <div className='leading-8'>
                    <h3 className='font-semibold'>Enalces utiles</h3>
                    <p className='cursor-pointer'>Paseadores</p>
                    <p className='cursor-pointer'>Paseadores destacados</p>
                    <p className='cursor-pointer'>Q.A</p>
                    <p className='cursor-pointer'>Contactanos</p>
                </div>
                <div className='w-72 leading-8'>
                    <h3 className='font-semibold'>Contacto</h3>
                    <p className='cursor-pointer'>Calle 123 #45-67, Barrio La Esperanza, Bogotá, Colombia</p>
                    <p className='cursor-pointer'>+57 312472363</p>
                    <p className='cursor-pointer'>Soporte@happypaws.com</p>
                </div>
            </div>
            <p className='text-center pb-8 text-balck opacity-40'> © Copyright HappyPaws 2024.</p>
        </footer>
    )
}

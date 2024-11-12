import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import Header from '../Header';



export default function Register() {
    return (
        <div>
            <Header />
            <section className='w-7/12 h-[80vh] m-auto flex justify-between items-center'>
                <Link to={'/register/walker'}>
                    <div className='w-[400px] flex justify-between border-b-2 border-primaryColor py-6 cursor-pointer'>
                        <h2 className='text-4xl font-semibold'>Soy paseador</h2>
                        <IoIosArrowRoundForward size={50} />
                    </div>
                </Link>

                <Link to={'/register/owner'}>
                    <div className='w-[400px] flex justify-between border-b-2 border-primaryColor py-6 cursor-pointer'>
                        <h2 className='text-4xl font-semibold'>Soy dueno</h2>
                        <IoIosArrowRoundForward size={50} />
                    </div>
                </Link>

            </section>
        </div>
    )
}

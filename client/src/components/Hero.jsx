import React from 'react'
import heroImg from '../assets/hero07Rm.png'

export default function Hero() {
    return (
        <div className=''>
            <div className='h-screen bg-hero-pattern bg-cover bg-no-repeat m-auto flex flex-col items-center justify-center'>
                <div className='w-11/12 flex justify-between mt-14'>
                    <div className='w-3/6 flex flex-col gap-8 justify-center'>
                        <h1 className='text-5xl font-bold'>La mejor forma de mantener a tu perro activo y feliz</h1>
                        <p className='w-5/6 text-base'>Ofrecemos paseos seguros y divertidos adaptados a las necesidades de tu perro. ¡Dale la actividad y el cuidado que merece!</p>
                        <button className='w-[230px] bg-black p-4 px-8 text-white text-lg rounded-xl'>Reserva un Paseo</button>
                    </div>
                    <div className='w-3/6 flex justify-center'>
                        <img className='h-[650px] rounded-xl' src={heroImg} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroCustom from '../components/HeroCustom'
import { useFetch } from '../hooks/useFetch'
import video from '../assets/video.mp4'
import heroImg from '../assets/bento1.png'

export default function AboutUs() {

    const { data } = useFetch('users/Paseador')
    console.log(data);

    let heroAbout = {
        title: "Paseadores comprometidos con la felicidad de tu mascota.",
        paragraph: "Confía en expertos apasionados por el cuidado animal. Ofrecemos paseos adaptados a las necesidades únicas de tu mascota, garantizando ejercicio, diversión y seguridad en cada salida.",
        image: heroImg,
    }

    let team = data.slice(1, 4)


    return (
        <div>
            <div >
                <div>
                    <Header />
                </div>
                <div className='pt-2'>
                    <HeroCustom title={heroAbout.title} paragraph={heroAbout.paragraph} image={heroAbout.image} />

                </div>
                <div className='w-11/12 m-auto pt-12'>
                    <div >
                        <h2 className='text-3xl font-bold mb-6'>Sobre nosotros</h2>
                        <div className='flex'>
                            <div className='w-3/6'>
                                <p className='w-10/12'>At et vehicula sodales est proin turpis pellentesque sinulla a aliquam amet rhoncus quisque eget sit. Sociis blandit et pellentesque aliquet at quisque tortor lacinia nullam. Mattis aenean scelerisque dui libero cras arcu in egestas sagittis.</p>
                            </div>
                            <div className='w-3/6 flex justify-end'>
                                <p className='w-10/12'>At et vehicula sodales est proin turpis pellentesque sinulla a aliquam amet rhoncus quisque eget sit. Sociis blandit et pellentesque aliquet at quisque tortor lacinia nullam. Mattis aenean scelerisque dui libero cras arcu in egestas sagittis.</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between mt-8'>
                        <div>
                            <p className='text-2xl font-semibold text-primaryColor'>2k+</p>
                            <p>Mascotas felices</p>
                        </div>
                        <div>
                            <p className='text-2xl font-semibold text-primaryColor'>72+</p>
                            <p>Paseadores</p>
                        </div>
                        <div>
                            <p className='text-2xl font-semibold text-primaryColor'>2k+</p>
                            <p>Clientes</p>
                        </div>
                        <div>
                            <p className='text-2xl font-semibold text-primaryColor'>13</p>
                            <p>Anios en la industria</p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-center text-3xl font-semibold mb-8 mt-20'>Nuestro equipo</h2>
                        <div className=' m-auto flex gap-6 '>
                            {
                                team.map((walker, i) => {
                                    return (
                                        <div className='w-full'>
                                            <img className='w-full h-96 rounded-xl' src={walker.photo} alt='algo' />
                                            <div className='flex flex-col justify-between items-center mt-2'>
                                                <h2 className='text-xl font-semibold'>{walker.name} {walker.lastName}</h2>
                                                <p className='py-2 px-4 opacity-45 font-semibold'>{walker.role}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='mt-20 mb-20'>
                        <video width="100%" height="500" autoPlay loop className='rounded-xl'>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>

                </div>
                <Footer />
            </div>
        </div>
    )
}

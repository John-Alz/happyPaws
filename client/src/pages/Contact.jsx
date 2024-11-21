import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroCustom from '../components/HeroCustom'
import location from '../assets/icons/location.svg'
import mail from '../assets/icons/mail.svg'
import phone from '../assets/icons/phone.svg'
import clock from '../assets/icons/clock.svg'
import heroImg from '../assets/bento4.png'

export default function Contact() {

    let heroContact = {
        title: "Experiencias únicas para tu perro, tranquilidad para ti.",
        paragraph: "Nuestros paseadores profesionales se aseguran de que tu mascota disfrute de paseos llenos de energía y cariño. Tú puedes relajarte sabiendo que está en manos confiables.",
        image: heroImg,
    }

    return (
        <>
            <Header />
            <HeroCustom title={heroContact.title} paragraph={heroContact.paragraph} image={heroContact.image} />

            <div className='w-11/12 m-auto pt-12'>
                <div className='flex gap-12'>
                    <div className='w-8/12 bg-gray p-8 rounded-xl'>
                        <form>
                            <div className='flex gap-8'>
                                <div className='w-3/6 flex flex-col gap-1'>
                                    <label className='font-semibold'>Nombre</label>
                                    <input type='text' name='name' placeholder='nombre' className='py-2 px-4 rounded-xl' />
                                </div>
                                <div className='w-3/6 flex flex-col gap-1'>
                                    <label className='font-semibold'>Apellidos</label>
                                    <input type='text' name='lastname' placeholder='Apellidos' className='py-2 px-4 rounded-xl' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='font-semibold'>Diraccion de email</label>
                                <input type='email' name='email' placeholder='Direccion de E-mail' className='py-2 px-4 rounded-xl' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='font-semibold'>Mensaje</label>
                                <textarea rows="6" cols="50" name='email' placeholder='Tu mensaje...' className='py-2 px-4 rounded-xl' />
                            </div>
                        </form>
                    </div>

                    <div className=' w-8/12'>
                        <h2 className='text-4xl font-semibold '>Contactanos</h2>
                        <p className='mt-6'>At et vehicula sodales est proin turpis pellentesque sinulla a aliquam
                            amet rhoncus quisque eget sit. Sociis blandit et pellentesque aliquet at quisque tortor lacinia nullam</p>
                        <div className='mt-6 flex flex-col gap-4'>
                            <div className='flex items-center gap-4'>
                                <img src={location} alt='location' />
                                <p className='text-lg font-semibold'>Calle 123 #45-67, Barrio El Sol, Bogotá, Colombia.</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={mail} alt='location' />
                                <p className='text-lg font-semibold'>rgarton@outlook.com</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={phone} alt='location' />
                                <p className='text-lg font-semibold'>(1) 234-5678</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={clock} alt='location' />
                                <p className='text-lg font-semibold'>Lunes - Viernes: 8AM - 6PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-20 mb-20'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1163.8490818697012!2d-74.08680112367965!3d4.618346003923231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9958568929bd%3A0x2f55e6997bd02efe!2sMallplaza%20NQS!5e0!3m2!1ses-419!2sco!4v1728957923917!5m2!1ses-419!2sco" width="100%" height="500" className='rounded-xl' ></iframe>
                </div>
            </div>
            <Footer />
        </>
    )
}

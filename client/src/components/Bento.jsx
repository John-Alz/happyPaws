import imgBneto from '../assets/bento1.png'
import imgBento2 from '../assets/bento2.png'
import imgBento3 from '../assets/bento3.png'
import imgBento4 from '../assets/bento4.png'

export default function Bento() {
    return (
        <div className='w-11/12 m-auto'>
            <h2 className='text-4xl font-semibold my-12'>Beneficios que tendra tu mascota</h2>
            <div className='grid w-full h-screen grid-cols-3 grid-rows-5 gap-4'>
                <div className='col-span-1 row-span-3 bg-grayDark flex justify-center rounded-2xl cursor-pointer hover:bg-primaryColor hover:text-white'>
                    <div className='w-4/6 pt-4 flex flex-col justify-between items-center'>
                        <div>
                            <h2 className='text-3xl font-semibold pb-2'>Ejercicio y Salud</h2>
                            <p>Mantén a tu mascota activa y saludable con paseos regulares al aire libre.</p>
                        </div>
                        <div>
                            <img className='w-[280px]' src={imgBneto} alt='imgBento' />
                        </div>
                    </div>
                </div>
                <div className='col-span-1 row-span-3 bg-grayDark  flex justify-center rounded-2xl cursor-pointer hover:bg-primaryColor hover:text-white'>
                    <div className='w-4/6 pt-4 flex flex-col justify-between items-center'>
                        <div>
                            <h2 className='text-3xl font-semibold pb-2'>Bienestar Mental
                            </h2>
                            <p>Reduce la ansiedad de tu perro y mejora su felicidad mediante paseos estimulantes.</p>
                        </div>
                        <div>
                            <img className='w-[280px]' src={imgBento2} alt='imgBento' />
                        </div>
                    </div>
                </div>
                <div className='col-span-1 row-span-5 bg-grayDark  flex justify-center rounded-2xl cursor-pointer hover:bg-primaryColor hover:text-white'>
                    <div className='w-4/5 pt-4 flex flex-col justify-between items-center'>
                        <div>
                            <h2 className='text-3xl font-semibold pb-2'>Socialización y Diversión</h2>
                            <p>Fomenta su socialización al interactuar con otros perros y personas durante cada paseo, ayudando a tu mascota a desarrollar habilidades sociales y mejorar su comportamiento en diferentes situaciones, lo que contribuye a su bienestar general</p>
                        </div>
                        <div>
                            <img className='w-[500px]' src={imgBento4} alt='imgBento' />
                        </div>
                    </div>
                </div>
                <div className='col-span-2 row-span-2 bg-grayDark  flex rounded-2xl cursor-pointer hover:bg-primaryColor hover:text-white'>
                    <div className='flex  justify-between items-center'>
                        <div className='w-3/6 px-8'>
                            <h2 className='text-3xl font-semibold pb-2'>Comodidad para Ti</h2>
                            <p>Deja los paseos en nuestras manos y disfruta de una mascota feliz, relajada y bien ejercitada. Nos aseguramos de que cada paseo sea una experiencia agradable, brindándole atención y cuidado mientras explora el mundo con nosotros.</p>
                        </div>
                        <div className='w-3/6 m-auto flex justify-center'>
                            <img className='h-[310px]' src={imgBento3} alt='imgBento' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

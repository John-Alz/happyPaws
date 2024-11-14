import heroImg from '../assets/bento2.png'

export default function HeroWalkers() {
    return (
        <div className=''>
            <div className=' bg-hero-walkers bg-cover bg-no-repeat m-auto flex flex-col items-center justify-center'>
                <div className='w-10/12 flex justify-between mt-28'>
                    <div className='w-3/6 flex flex-col gap-8 justify-center'>
                        <h1 className='text-5xl font-bold leading-tight'>Paseadores profesionales para el bienestar de tu mascota</h1>
                        <p className='w-5/6 text-base'>Descubre paseadores cualificados que brindan atención personalizada y paseos seguros para tu mascota.</p>
                    </div>
                    <div className='w-3/6 flex justify-end'>
                        <img className='h-[430px] rounded-xl' src={heroImg} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

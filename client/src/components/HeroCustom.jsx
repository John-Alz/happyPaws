

export default function HeroWalkers({ title, paragraph, image }) {
    return (
        <div className=''>
            <div className=' bg-hero-walkers bg-cover bg-no-repeat m-auto flex flex-col items-center justify-center'>
                <div className='w-10/12 flex justify-between mt-28'>
                    <div className='w-3/6 flex flex-col gap-8 justify-center'>
                        <h1 className='text-5xl font-bold leading-tight'>{title}</h1>
                        <p className='w-5/6 text-base'>{paragraph}</p>
                    </div>
                    <div className='w-3/6 flex justify-end'>
                        <img className='h-[430px] rounded-xl' src={image} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

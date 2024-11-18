import React from 'react'
import { useSelector } from 'react-redux'

export default function HeaderProfile() {


    const data = useSelector(state => state.users.profile)

    return (
        <header className='h-18 border-b-2 border-grayDark py-2'>
            <div className='flex items-center justify-end px-4 gap-2'>
                <img className='w-12 h-12 rounded-full' src={data.photo} alt={`foto de ${data.name}`} />
                <div>
                    <h2>{data.name}</h2>
                    <p className='text-xs text-primaryColor'>{data.role}</p>
                </div>
            </div>
        </header>
    )
}

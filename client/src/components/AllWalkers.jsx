import React from 'react'
import { Link } from 'react-router-dom'
import CardWalker from './CardWalker'
import { useFetch } from '../hooks/useFetch'

export default function AllWalkers() {

    const { data } = useFetch('users/Paseador')
    console.log(data);

    return (
        <div>
            <div className='w-11/12 m-auto py-8'>
                <h2 className='text-4xl font-semibold'>Elige un paseador</h2>
            </div>
            <div className='w-11/12 m-auto grid grid-cols-4 gap-8'>
                {
                    data.map((item, i) => {
                        return (
                            <div key={i} >
                                <Link to={`/paseador/${item._id}`}>
                                    <CardWalker photo={item.photo} name={item.name} hourlyRate={item.paseadorInfo.hourlyRate} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

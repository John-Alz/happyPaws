import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setWalkers } from '../redux/usersSlice';
import CardWalker from './CardWalker';
import { Link } from 'react-router-dom';

export default function BestWalkers() {

    const data = useSelector(state => state.users.walkers)


    const dispatch = useDispatch();

    const getUsers = async () => {
        let response = await axios.get("http://localhost:3000/api/users/Paseador");
        dispatch(setWalkers(response.data))
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <div className='w-11/12 m-auto'>
            <div className='flex justify-between mb-8 mt-8'>
                <h2 className='text-4xl font-semibold'>Paseadores destacados</h2>
                <button className='bg-black py-2 px-4 rounded-xl text-white hover:bg-primaryColor'>Ver todos</button>
            </div>
            <div className='grid grid-cols-4 gap-8'>
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

import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setWalkers } from '../redux/usersSlice';
import CardWalker from './CardWalker';

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
            <h2 className='text-4xl font-semibold mb-8 mt-8'>Paseadores destacados</h2>
            <div className='grid grid-cols-4'>
                {
                    data.map((item, i) => {
                        return (
                            <div key={i} >
                                <CardWalker />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

import React from 'react'
import AllWalkers from '../components/AllWalkers'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroWalkers from '../components/HeroWalkers'

export default function Walkers() {
    return (
        <div >
            <div>
                <Header />
            </div>
            <div className='pt-2'>
                <HeroWalkers />
            </div>
            <div>
                <AllWalkers />
            </div>
            <Footer />
        </div>
    )
}

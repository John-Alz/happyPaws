import React from 'react'
import Header from '../components/Header'
import DetailWaker from '../components/DetailWaker'
import Footer from '../components/Footer'

export default function Walker() {
    return (
        <div>
            <Header />
            <div className='pt-32'>
                <DetailWaker />
            </div>
            <Footer />
        </div>
    )
}

import React from 'react'

export default function HeaderProfile() {
    return (
        <header className='h-18 border-b-2 border-grayDark py-2'>
            <div className='flex items-center justify-end px-4 gap-2'>
                <img className='w-12 h-12 rounded-full' src='https://www.shutterstock.com/shutterstock/photos/1617540484/display_1500/stock-photo-closeup-photo-of-amazing-short-hairdo-lady-looking-up-empty-space-deep-thinking-creative-person-arm-1617540484.jpg' alt='foto' />
                <h2>Samanta Rodriguez</h2>
            </div>
        </header>
    )
}

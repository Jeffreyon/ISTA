import Image from 'next/image'
import React from 'react'
import mumandchild from '../../../public/images/mumandchild.png'
const Banner = () => {
    return (
        <section id='core-value'>
            <div className='min-h-screen h-4/5 bg-cover bg-center' style={{
                backgroundImage: `url(${mumandchild.src})`,
            }}>
            </div>

        </section>
    )
}

export default Banner

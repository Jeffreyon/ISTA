import Image from 'next/image'
import React from 'react'
import location from '../../../public/icons/location.png'
import telephone from '../../../public/icons/telephone.png'
import message from '../../../public/icons/message.png'

const Infos = () => {
    return (
       <div className="container">
            <div className='w-full sm:w-10/12 mx-auto px-5 mb-14'>

                <h2 className='sm:text-5xl text-2xl font-semibold text-center'>Contact Us</h2>
                <p className='sm:text-lg text-sm sm:font-medium font-semibold text-center mt-3'>Got a special request, need more information about the websitre or you simply have something to talk abput? Reach out
                    to us and we will respond as soon as possible</p>


                <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 mt-8 ">
                    <div className='p-5 border-dotted border-4 rounded-2xl'>
                        <Image src={location} alt="contact" className='mx-auto' />

                        <p className='text-base font-medium text-center mt-3'>plot 6, magodo estate, lagos</p>
                    </div>
                    <div className='p-5 border-dotted border-4 rounded-2xl'>
                        <Image src={telephone} alt="contact" className='mx-auto' />

                        <p className='text-base font-medium text-center mt-3'>+23457240000</p>
                    </div>  <div className='p-5 border-dotted border-4 rounded-2xl'>
                        <Image src={message} alt="contact" className='mx-auto' />

                        <p className='text-base font-medium text-center mt-3'>customersupport@ISTA.Com</p>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Infos

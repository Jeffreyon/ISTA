import React from 'react'

const Philosophy = () => {
    return (
        <div className="bg-primary-1000">
            <div className='flex flex-col gap-y-10 sm:flex-row content-start container py-20'>
                <div className='basis-6/12 sm:basis-12/12'><h1 className='sm:text-3xl text-2xl font-medium title-font text-center text-primary'>Our Philosophy</h1></div>
                <div className='basis-6/12 sm:basis-12/12 flex gap-4 flex-col'>
                    <div className='p-9 bg-white rounded-2xl'>
                        <h1 className='sm:text-3xl text-2xl'>Mission</h1>
                        <p className='mt-2 bg-white text-base font-medium text-primary-900'>Our mission is to provide personalized and effective tutoring services to students of all ages and backgrounds. We are
                            committed to helping each student achieve their academic goals, build confidence, and develop a love of learning.
                            We believe that education is the key to unlocking a brighter future, and we are dedicated to making quality education
                            accessible to all.</p>
                    </div>
                    <div className='p-9 bg-white rounded-2xl'>
                        <h1 className='sm:text-3xl text-2xl'>Vission</h1>
                        <p className='mt-2  text-base font-medium text-primary-900'>Our vision is to be a leading online tutoring service that
                            transforms the way students learn. We strive to create a dynamic and engaging learning environment where students can
                            explore their passions and reach their full potential. We envision a world where education is a lifelong pursuit that
                            is enjoyable, fulfilling, and accessible to all. Through our commitment to excellence and
                            innovation, we aim to inspire a new generation of learners who are empowered to make a positive impact on the worl</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Philosophy

import React from 'react'


let core = [
    {

        title: "Excellence",
        desc: "We strive for excellence in everything we do, from the quality of our tutoring services to the professionalism of our tutors."
    },
    {

        title: "Personalisation",
        desc: "We believe in a personalized approach to learning that is tailored to each student's unique needs and strengths."
    }, {

        title: "Passion",
        desc: "We are passionate about education and believe that every student has the potential to succeed."
    }, {

        title: "Innovation",
        desc: "We embrace innovation and are committed to staying at the forefront of educational technology and teaching methodologies."
    }, {

        title: "Impact",
        desc: "We believe that education has the power to change lives and make a positive impact on the world. We are dedicated to helping students reach their full potential and make a difference in their communities and beyond."
    }, {

        title: "Integrity and Accountability",
        desc: " We operate with honesty, transparency, and integrity in all of our interactions with students and families  and We hold ourselves accountable for the success of our students and are committed to continuous improvement and growth."
    },

]
const Corevalues = () => {
    return (
        <section id='core-value' className='bg-primary-50 py-20'>
            <div className="container">
                <h1 className='sm:text-5xl text-4xl text-primary mb-10'>Core Values</h1>

                <div className='grid sm:grid-cols-3 grid-cols-1 gap-16 '>
                    {core.map((item, i) => {
                        return (
                            <div key={i} className=''>
                                <h1 className='sm:text-5xl text-4xl font-medium text-primary-800'>0{i + 1}</h1>
                                <h1 className='text-xl mt-2 font-medium text-primary-930'>{item.title}</h1>
                                <p className='text-xl mt-1 font-medium text-primary-900'>{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Corevalues

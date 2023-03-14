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
        desc: "We strive for excellence in everything we do, from the quality of our tutoring services to the professionalism of our tutors."
    }, {

        title: "Innovation",
        desc: "We strive for excellence in everything we do, from the quality of our tutoring services to the professionalism of our tutors."
    }, {

        title: "Impact",
        desc: "We strive for excellence in everything we do, from the quality of our tutoring services to the professionalism of our tutors."
    }, {

        title: "Integrity and Accountability",
        desc: "We strive for excellence in everything we do, from the quality of our tutoring services to the professionalism of our tutors."
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

import React from 'react'

const Contactforms = () => {
    return (

       <div className="container">
            <div className='bg-white p-8 w-full sm:w-10/12 mx-auto rounded-xl'>
                <div className='grid grid-cols-1 gap-10 sm:grid-cols-2'>
                    <div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Full name</span>
                            </label>
                            <input type="text" placeholder="Enter name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mt-3">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input type="text" placeholder="email address" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mt-3">
                            <label className="label">
                                <span className="label-text">Phone number</span>
                            </label>
                            <input type="text" placeholder="+234-phone number" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>

                        </label>
                        <textarea className="textarea textarea-bordered h-56 sm:h-full" placeholder="Enter here"></textarea>

                    </div>
                </div>
                <div className="flex justify-center mt-16">
                    <a href="/contact" className="btn btn-primary">
                        Send Message
                    </a>
                </div>


            </div>
       </div>


    )
}

export default Contactforms

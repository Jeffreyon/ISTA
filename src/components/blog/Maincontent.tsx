import Image from 'next/image'
import React, { useState } from 'react'
import blogsingle from '../../../public/images/blogsingle.jpg'

const Maincontent = () => {
    const [active, setActive] = useState(0)
    const tabbtn = [
        {
            name: "All"
        }, {
            name: "Blog Post"
        }, {
            name: "Resources"
        }, {
            name: "Marketing"
        }, {
            name: "Customer services"
        }
    ]

    const blogobj = [
        {
            title: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia ",
            desc: "consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet................."
        }, {
            title: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia ",
            desc: "consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet................."
        },
        {
            title: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia ",
            desc: "consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet................."
        },
        {
            title: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia ",
            desc: "consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet................."
        }, {
            title: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia ",
            desc: "consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet................."
        },
        {
            title: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia ",
            desc: "consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet................."
        }

    ]

    return (
        <div className='bg-primary-1000 py-10'>
            <div className="container">
                <div className='lg:w-11/12 mx-auto'>

                    <h2 className='text-2xl text-primary-960'>Latest stories</h2>
                    
                    <p className='mb-2 mt-4 w-20 sm:hidden block'>Filter By</p>
                    <select className="select sm:hidden block select-bordered">
                        <option disabled selected>All</option>
                        {tabbtn.map((item,i)=>{
                            return(
                                <option>{item.name}</option>
                            )
                        })}
                        
                
                    </select>
                    <div className="sm:flex gap-5 mt-3 hidden">
                        {tabbtn.map((item, i) => {
                            return (
                                <button className={`text-base blog-btn px-3 rounded-lg py-1 ${active === i ? "text-primary-965 bg-primary-953" : "text-primary-950"}`}
                                    key={item.name}
                                    onClick={() => {
                                        setActive(i)
                                    }}
                                >{item.name}</button>
                            )
                        })}

                    </div>




                    <div className='grid md:grid-cols-2 grid-cols-1 mt-8 gap-10'>


                        {blogobj.map((item, i) => {
                            return (<div className='p-5 bg-white rounded-xl'>
                                <Image src={blogsingle} alt="blog-single" />

                                <h2 className='md:text-2xl font-medium text-base mt-3 text-primary-950'>{item.title}</h2>
                                <p className='mt-3 text-sm font-medium md:text-lg text-primary-900'>{item.desc}</p>
                            </div>)
                        })}


                    </div>


                    <div className="flex justify-center mt-16">
                        <a href="/blog" className="btn btn-primary">
                            Load more stories
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Maincontent

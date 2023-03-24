import Image from 'next/image'
import topblog from "../../../public/images/toppost.jpg"
import React from 'react'

const TopBlogPost = () => {
  return (
    <div className='container items-center grid p-12  grid-cols-1 md:grid-cols-2 gap-8 xl:gap-0'>
      <div className=''>
        <Image src={topblog} alt="blog-img" />
      </div>
      <div className=''>
        <div>
          <div className='flex gap-3 items-center'><button className=''>NEWS</button> <span className='text-sm text-primary-900'>March 11, 2023</span></div>
          <h2 className='text-2xl mt-2 text-primary-950'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia </h2>
          <p className='text-sm text-primary-900 mt-2'>consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.conse uis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.cquat duis enim velit
            mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <h2 className='text-primary-955 mt-2'> ISTA Blog post, Lagos Nigeria</h2>
        </div>
      </div>

    </div>
  )
}

export default TopBlogPost

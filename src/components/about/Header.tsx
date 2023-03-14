import React from 'react'
import Image from "next/image";
import aboutleft from '../../../public/images/aboutleft.jpg'
import aboutright from '../../../public/images/aboutright.jpg'
const Header = () => {
  return (
      <div className="min-h-screen flex items-center py-20 bg-primary text-white">
          <div className="container">
              <h1 className="text-5xl font-semibold">About us</h1>
              <p className="text-lg font-medium leading-7 mt-3">We are a team of dedicated tutors who are passionate about helping students achieve their academic goals. Our online
                  tutoring service offers personalized lessons in a variety of subjects, including math, science, language arts,
                  history, and more. We believe that every student has the potential to succeed, and we are committed to providing
                  the support and guidance they need to thrive.</p>
              <div className="flex gap-3 mt-10">
                  <div>
                      <Image src={aboutleft} className="rounded-box" alt="about-img-left" />
                  </div>
                  <div>
                      <Image src={aboutright} className="rounded-box" alt="about-img-right" />
                  </div>
              </div>


          </div>
      </div>
  )
}

export default Header

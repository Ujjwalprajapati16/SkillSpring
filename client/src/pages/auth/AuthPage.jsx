import React from 'react'
import { Outlet } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { assets } from '../../assets/assets' // Adjust path as needed

const AuthPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left side with gradient, logo, and animation */}
      <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex flex-col justify-center items-center p-10">
        
        {/* Website Logo */}
        <img src={assets.logo} alt="SkillSpring Logo" className="w-100 mb-6 py-5" />

        {/* Type Animation Text */}
        <TypeAnimation
          sequence={[
            'Learn Anytime, Anywhere.',
            1500,
            'Track Your Progress with Ease.',
            1500,
            'Achieve Your Learning Goals.',
            1500,
            'Empower Your Skills with SkillSpring.',
            1500,
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl sm:text-3xl font-semibold text-center"
          repeat={Infinity}
        />

        {/* Static Subtext Below Animation */}
        <p className="text-sm sm:text-base mt-6 text-center max-w-md">
          Manage your learning, track progress, and achieve your goals with our LMS.
        </p>
      </div>

      {/* Right side for dynamic content */}
      <div className="w-1/2 flex justify-center items-center p-8">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthPage

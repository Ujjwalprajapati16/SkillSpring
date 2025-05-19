import React from 'react'
import { Outlet } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'

const AuthPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left side with gradient and animation */}
      <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-6">SkillSpring</h1>
        <p className="text-lg mt-4 text-center">
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

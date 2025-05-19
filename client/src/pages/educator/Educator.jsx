import React from 'react'
import { Outlet } from 'react-router-dom'

const Educator = () => {
  return (
    <div>
      <h1>Educator</h1>
      <p>Welcome to the Educator page!</p>
      <p>This is where you can manage your courses and students.</p>
      <p>More features coming soon!</p>
      <div>
        {<Outlet />}
      </div>
    </div>
  )
}

export default Educator
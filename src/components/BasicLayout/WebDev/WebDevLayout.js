import React from 'react'

import AdminWord from '../AdminWord'

import NavBar from '../../NavBar/NavBar'
import Footer from '../Footer'

function WebDevLayout() {
  return (
    <div className='layout'>
      <NavBar />
      <AdminWord />
      <p style={{ color: 'white', zIndex: 999 }}>Web Dev</p>
      <Footer />
    </div>
  )
}

export default WebDevLayout

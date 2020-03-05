import React from 'react'

import NavBar from '../NavBar/NavBar'
import AdminWord from './AdminWord'
import Footer from './Footer'

function CompleteLayout() {
  return (
    <div className='layout'>
      <NavBar />
      <AdminWord />
      <Footer />
    </div>
  )
}

export default CompleteLayout

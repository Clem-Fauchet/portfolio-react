import React from 'react'

import NavBar from '../../NavBar/NavBar'
import Footer from '../Footer'
import AdminWord from '../AdminWord'
import { admin } from '../admin'

function ProjectsLayout() {
  const word = admin.map((message) => message.word)
  return (
    <div className='layout'>
      <NavBar />
      <AdminWord word={word[1]} />

      <Footer />
    </div>
  )
}

export default ProjectsLayout

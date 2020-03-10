import React from 'react'

import AdminWord from '../AdminWord'
import { admin } from '../admin'
import Book from './Book'
import Skills from './Skills'

import { ReactComponent as Wand } from '../../../assets/wand.svg'

import NavBar from '../../NavBar/NavBar'
import Footer from '../Footer'

function WebDevLayout() {
  const word = admin.map((message) => message.word)

  return (
    <div className='layout'>
      <NavBar />
      <Wand />

      <div className='content'>
        <AdminWord word={word[0]} />
        <Book />
        <Skills />
      </div>

      <Footer />
    </div>
  )
}

export default WebDevLayout

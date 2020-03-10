import React from 'react'

import NavBar from '../../NavBar/NavBar'
import Footer from '../Footer'
import AdminWord from '../AdminWord'
import { admin } from '../admin'

import ProjectBloc from './ProjectBloc'
import { projects } from './projects'

function ProjectsLayout() {
  const word = admin.map((message) => message.word)

  const projectBloc = projects.map((project) => (
    <ProjectBloc key={project.id} project={project} />
  ))

  return (
    <div className='layout'>
      <NavBar />
      <div className='content'>
        <AdminWord word={word[1]} />
        {projectBloc}
      </div>

      <Footer />
    </div>
  )
}

export default ProjectsLayout

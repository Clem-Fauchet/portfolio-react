import React from 'react'

import { GiSpellBook } from 'react-icons/gi'

function ProjectBloc({ project }) {
  return (
    <div
      className='projectBloc'
      style={{ flexDirection: `${project.id % 2 ? 'row-reverse' : 'row'}` }}
    >
      <div
        className='image'
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>

      <div className='description'>
        <span className='title'>
          <h3>{project.title}</h3>{' '}
          <button>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              Take a look{' '}
              <GiSpellBook style={{ height: '1.5em', width: '1.5em' }} />
            </a>
          </button>
        </span>

        <h4>{project.subTitle}</h4>

        <p>{project.use}</p>
        <p style={{ width: '70%' }}>{project.description}</p>
        <p>{project.queries}</p>

        <p style={{ margin: '2% 0' }}>
          <span style={{ textDecoration: 'underline' }}>Tools: </span>
          {project.tools}
        </p>
      </div>
    </div>
  )
}

export default ProjectBloc

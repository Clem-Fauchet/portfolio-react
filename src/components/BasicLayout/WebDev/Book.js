import React, { useContext } from 'react'

import { LoadContext } from '../../../App'

function Book() {
  const loadContext = useContext(LoadContext)
  return (
    <div className='book'>
      <div className='first-col'>
        <h3>Who am I?</h3>
        <p>
          Newly front end developer who found a true passion in what I do. As
          someone who needs to create stuff, front end was absolutely perfect
          for me as it stimulates both my logical thinking and creative side.{' '}
          <br />
          Love to get lost on Youtube and find new web technos. Beside coding, I
          try to improve myself by making better UX/UI design.{' '}
        </p>
      </div>

      <div className='second-col'>
        <h3>What I know?</h3>
        <ul>
          <li>
            <span style={{ textDecoration: 'underline' }}>
              {' '}
              Font end basic languages:
            </span>{' '}
            HTML 5, CSS 3, Javascript
          </li>
          <li>
            <span style={{ textDecoration: 'underline' }}>Frameworks:</span>{' '}
            Bootstrap, <span style={{ color: '#FF9115' }}>React JS</span>
          </li>
          <li>
            <span style={{ textDecoration: 'underline' }}>CMS:</span> Wordpress
          </li>
          <li>
            <span style={{ textDecoration: 'underline' }}>Preprocessor:</span>{' '}
            SASS
          </li>
          <li>
            <span style={{ textDecoration: 'underline' }}>Versionning:</span>{' '}
            GIT
          </li>
          <li>
            <span style={{ textDecoration: 'underline' }}>Adobe tools:</span>{' '}
            Photoshop, Illustrator, InDesign
          </li>
          <li>
            <span style={{ textDecoration: 'underline' }}>Other tools:</span>{' '}
            Webpack, Node.js
          </li>
        </ul>
        <button
          onClick={() => loadContext.loadDispatch({ type: 'loadProjects' })}
        >
          Check my last projects
        </button>
      </div>
    </div>
  )
}

export default Book

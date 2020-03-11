import React from 'react'

function Recipe() {
  return (
    <div className='recipe'>
      <div className='first-col'>
        <h3>Chemist recipe</h3>
        <ul>
          <li>- Knowledge in chemistry of course</li>
          <li>- Methodic & conscientious </li>
          <li>- Good logical & critical thinking </li>
          <li>- Manual dexterity </li>
          <li>- Follow protocols & security rules above all </li>
        </ul>
      </div>
      <div className='second-col'>
        <h3>Personal notes</h3>
        <ul>
          <li>- Specialized in materials science</li>
          <li>- Qualities appreciated especially on monthly projects</li>
          <li>- Best combination with autonomy</li>
          <li>- Stay calm whatever happens</li>
          <li>- Learn from your mistakes</li>
        </ul>
      </div>
    </div>
  )
}

export default Recipe

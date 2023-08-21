import React from 'react'

function Image({Source, Alt, Class}) {
  return (
   <img src={Source} alt={Alt} className={Class} />
  )
}

export default Image
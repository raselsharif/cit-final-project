import React from 'react'

function UL({children, Class, Id}) {
  return (
    <ul className={Class} id={Id}>
        {children}
    </ul>
  )
}

export default UL
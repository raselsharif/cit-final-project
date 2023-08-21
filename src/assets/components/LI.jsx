import React from 'react'

function LI({children, Class, Id}) {
  return (
    <li className={Class} id={Id}>
        {children}
    </li>
  )
}

export default LI
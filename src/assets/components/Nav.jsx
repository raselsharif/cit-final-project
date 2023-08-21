import React from 'react'

function Nav({children, Class, Id}) {
  return (
    <nav className={Class} id={Id}>
        {children}
    </nav>
  )
}

export default Nav
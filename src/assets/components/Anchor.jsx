import React from 'react'

function Anchor({Link, Target, Class,text,children}) {
  return (
    <a className={Class} link={Link} target={Target}>{text} {children}</a>
  )
}

export default Anchor
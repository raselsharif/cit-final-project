import React from 'react'

function Anchor({Link, Target, Class,text}) {
  return (
    <a className={Class} link={Link} target={Target}>{text}</a>
  )
}

export default Anchor
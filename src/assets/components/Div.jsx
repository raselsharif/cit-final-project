import React from 'react'

function Div({Class, Id, children}) {
  return (
    <div className={Class} id={Id}>{children}</div>
  )
}

export default Div
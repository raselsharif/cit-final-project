import React from 'react'

function Span({Class, Id, Text}) {
  return (
    <span className={Class} id={Id}>
        {Text}
    </span>
  )
}

export default Span
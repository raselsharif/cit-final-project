import React from 'react'

function H2({Class, children, Text}) {
  return (
    <h2 className={Class}>
        {children} {Text}
    </h2>
  )
}

export default H2
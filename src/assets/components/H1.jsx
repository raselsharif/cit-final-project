import React from 'react'

function H1({Class,children, Text}) {
  return (
    <h1 className={Class}>
        {children} {Text}
    </h1>
  )
}

export default H1
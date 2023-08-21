import React from 'react'

function P({Class, Id, Text}) {
  return (
    <p className={Class} id={Id}>
        {Text}
    </p>
  )
}

export default P
import React from 'react'

function Button({Class, Id, Text}) {
  return (
    <button className={Class} id={Id}>
        {Text}
    </button>
  )
}

export default Button
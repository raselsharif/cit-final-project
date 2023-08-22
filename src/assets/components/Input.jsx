import React from 'react'

function Input({Type, Placeholder, Class, Id}) {
  return (
    <input type={Type} placeholder={Placeholder} className={Class} id={Id} />
  )
}

export default Input
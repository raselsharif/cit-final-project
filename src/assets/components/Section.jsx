import React from 'react'

function Section({Class,Id,children}) {
  return (
   <section className={Class} id={Id}>
    {children}
   </section>
  )
}

export default Section
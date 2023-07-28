import React from 'react'

function Person({person}) { // the use of props
    // this is commondly use for application rendering list is data
  return (
    <h2>
    I am {person.name}, and I am {person.age} years old. i know {person.skill}
    </h2>
  )
}

export default Person
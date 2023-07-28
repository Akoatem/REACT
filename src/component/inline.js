import React from 'react'

// create an oject and apply to style attribute
const heading = {
    fontSize: '72px',
    color: 'blue'
}

function inline() { 
  return (
    <div>
        <h1 style={heading}>inline</h1>
    </div>
  )
}

export default inline
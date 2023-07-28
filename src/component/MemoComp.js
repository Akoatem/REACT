// use rfce to create a functional component

import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Memo Comp')
  return (
    <div>Memo Component {name}</div>
  )
}

export default React.memo(MemoComp) // this stop memo from rerendering
                                    // this is higher order component
import React from 'react'

function Ex({x,i,toggle}) {
  return (
    <div>
    <li className={x.status?'blueback':'redback'}> {x.title}
    <button onClick={()=>{toggle(i)}}>{x.status?'undo':'done'}</button>
    </li> 
    </div>
  )
}

export default Ex;
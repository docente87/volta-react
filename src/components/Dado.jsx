import React from 'react'
import './Dado.css'

function Dado(props) {
  return (
    <div className='dado-cuadro'>{props.valor}</div>
  )
}

export default Dado
import React from 'react'

const ListOFProd = (props) => {
  return (
   <div>
    <ul>
        <li>AWD {props.id} of {props.name} @@ ${props.price} </li>
    </ul>
   </div>
  )
}

export default ListOFProd
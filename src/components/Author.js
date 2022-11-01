import React from 'react'

function Author(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.email} </h2>
      <h2>{props.phone} </h2>
      <h2>{props.webpage}</h2>
      <img src="src\logo.svg" alt="portret" />
      

    </div>
  )
}

export default Author

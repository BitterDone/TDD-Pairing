import { useState, useEffect } from 'react'

function ChildComponent ({ message }) {

  return (
    <div id='ChildComponent'>The message is {message}.</div>
  )
}

export default ChildComponent

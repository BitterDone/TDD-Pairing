import { useState, useEffect } from 'react'

import logo from '../../logo.svg'
import './App.css'

function App () {
  const [displayValue, setDisplayValue] = useState('loading')
  const [counter, setCounter] = useState(0)

  function doFetch () {
    fetch('http://localhost:8080/hello')
      .then(res => {
        return res.text()
      })
      .then(data => {
        setDisplayValue(data)
        setCounter(counter + 1)
      })
      .catch(e => {
        setDisplayValue('Error loading data')
      })
  }

  useEffect(() => {
    doFetch()
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Displaying: {displayValue}!
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React {counter}
        </a>
        <button onClick={() => doFetch()}>
          Load data
        </button>
      </header>
    </div>
  )
}

export default App

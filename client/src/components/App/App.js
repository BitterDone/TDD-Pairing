import { useState, useEffect } from 'react'
import useFetch from '../utilities/network'

import logo from '../../logo.svg'
import './App.css'
import ChildComponent from '../ChildComponent/ChildComponent'

function App () {
  const [displayValue, setDisplayValue] = useState('loading')
  const [counter, setCounter] = useState(0)

  const url = 'http://localhost:8080/hello'
  const { doFetch, loading, result, error } = useFetch(url)

  useEffect(() => {
    doFetch(url)
  }, [])

  useEffect(() => {
    if (loading === true) {
      setDisplayValue('loading')
      return
    }

    if (result !== undefined) {
      setDisplayValue(result)
      setCounter(counter + 1)
      return
    }

    if (error !== undefined) {
      setDisplayValue('Error loading data' + error)
    }
  }, [loading, result, error])

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
        <button onClick={() => doFetch(url)}>
          <ChildComponent message='Load data' />
        </button>
      </header>
    </div>
  )
}

export default App

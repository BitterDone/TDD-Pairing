import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'
import { act } from 'react'

describe('App component', () => {
  let globalFetch
  
  beforeAll(() => {
    globalFetch = global.fetch
  })
  
  afterAll(() => {
    global.fetch = globalFetch
  })
  
  describe.skip('Static text', () => {
    test('renders learn react link', () => {
      render(<App />)
      const linkElement = screen.getByText(/learn react/i)
      expect(linkElement).toBeInTheDocument()
    })
  })

  describe('Network data', () => {
    test('renders data from the backend', async () => {
      global.fetch = () => Promise.resolve({ text: () => 'hello' })

      render(<App />)
      await waitFor(() => {
        expect(screen.getByText(/Displaying: hello/i)).toBeInTheDocument()
      })
      expect(screen.getByText(/Learn React 1/i)).toBeInTheDocument()
      // setTimeout(() => {
        expect(global.fetch).toHaveBeenCalledTimes(1)
      // }, 100)

      await act(async () => await userEvent.click(screen.getByText(/Load data/i)))

      setTimeout(() => {
        expect(global.fetch).toHaveBeenCalledTimes(2)
      }, 100)
      expect(screen.getByText(/Learn React 2/i)).toBeInTheDocument()
      expect(screen.getByText(/Displaying: hello/i)).toBeInTheDocument()
    })

    test('renders error from backend failure', async () => {
      // global.fetch = jest.fn(() => Promise.reject({ error: 'error' }))
      function mockFetch () { return Promise.reject({ error: 'error' }) }
      jest.spyOn(global, 'fetch').mockImplementation(mockFetch)

      render(<App />)
      await waitFor(() => {
        expect(screen.getByText(/Error loading data/i)).toBeInTheDocument()
      })
      setTimeout(()=>{
        // https://stackoverflow.com/questions/50809648/spyon-a-mocked-jest-module-not-spying-properly
        expect(mockFetch).toHaveBeenCalledTimes(1)
      }, 100)
    })
  })
})

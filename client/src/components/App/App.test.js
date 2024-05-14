import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'
import { act } from 'react'

describe('App component', () => {
  describe('Static text', () => {
    test('renders learn react link', () => {
      render(<App />)
      const linkElement = screen.getByText(/learn react/i)
      expect(linkElement).toBeInTheDocument()
    })
  })

  describe('Network data', () => {
    test('renders data from the backend', async () => {
      jest.spyOn(global, 'fetch').mockResolvedValue({ text: () => 'hello' })

      render(<App />)
      await waitFor(() => {
        expect(screen.getByText(/Displaying: hello/i)).toBeInTheDocument()
      })
      expect(screen.getByText(/Learn React 1/i)).toBeInTheDocument()
      expect(global.fetch).toHaveBeenCalledTimes(1)

      await act(async () => await userEvent.click(screen.getByText(/Load data/i)))

      expect(global.fetch).toHaveBeenCalledTimes(2)
      expect(screen.getByText(/Learn React 2/i)).toBeInTheDocument()
      expect(screen.getByText(/Displaying: hello/i)).toBeInTheDocument()
    })
    
    test('renders error from backend failure', async () => {
      const mockPromiseReject = new Promise((resolve, reject) => reject('error'))
      jest.spyOn(global, 'fetch').mockResolvedValue(mockPromiseReject)

      render(<App />)
      await waitFor(() => {
        expect(screen.getByText(/Error loading data/i)).toBeInTheDocument()
      })
    })
  })
})

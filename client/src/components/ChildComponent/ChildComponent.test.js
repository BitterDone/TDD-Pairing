import { render, screen, waitFor } from '@testing-library/react'

import ChildComponent from './ChildComponent'

describe('App component', () => {
    test('renders when no props are given', () => {
        render(<ChildComponent />)
        const linkElement = screen.getByText(/The message is ./i)
        expect(linkElement).toBeInTheDocument()
    })

    test('renders when props are given', () => {
        render(<ChildComponent message={'hello'} />)
        const linkElement = screen.getByText(/The message is hello./i)
        expect(linkElement).toBeInTheDocument()
    })
})

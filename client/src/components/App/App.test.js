import { render, screen } from '@testing-library/react';
import App from './App';

describe('test-name', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders data from the backend', () => {
    render(<App />);
    const linkElement = screen.getByText(/hello/i);
    expect(linkElement).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('should render the hello text', () => {
    render(<App />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

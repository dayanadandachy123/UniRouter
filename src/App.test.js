// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UniRouter title', () => {
    render(<App />);
    const titleElement = screen.getByText(/UniRouter/i);
    expect(titleElement).toBeInTheDocument();
});

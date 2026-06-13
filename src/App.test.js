// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockNet title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockNet/i);
    expect(titleElement).toBeInTheDocument();
});

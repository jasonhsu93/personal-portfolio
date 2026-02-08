import { render, screen } from '@testing-library/react';
import App from './App';

test('renders primary portfolio sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 2, name: /experiences/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /projects/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /tech stack/i })).toBeInTheDocument();
});

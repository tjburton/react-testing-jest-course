import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has the correct initial colour', () => {
  render(<App />)

  // find an element with a role of button and text of 'Change to blue'.
  const colourButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background colour to be red
  expect(colourButton).toHaveStyle({ backgroundColor: 'red' })

  // click button
  fireEvent.click(colourButton);

  // expect the background colour to be blue
  expect(colourButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be 'Change to red'
  expect(colourButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  // check that the button starts out enabled
  const colourButton = screen.getByRole('button', {name : 'Change to blue'} );
  expect(colourButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox is disabled and then becomes enabled', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
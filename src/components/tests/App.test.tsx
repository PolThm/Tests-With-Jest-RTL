import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from '@testing-library/react'
import App from '../App'
import {CounterProvider} from '../../context'


const renderWithContext = (
  component: any) => {
  return {
    ...render(
      <CounterProvider>
        {component}
      </CounterProvider>)
  }
}


describe('Title', () => {
  test('is displayed', () => {
    render(<App />);

    expect(screen.getByRole('heading',{name: 'COUNTER'})).toBeInTheDocument()
  });
});


describe('Counter', () => {
  it('should equal to 0', () => {
    render(<App />);
    expect(screen.getByTestId('counter')).toHaveTextContent('0')
  });

  it('should be enabled', () => {
    render(<App />);
    expect(screen.getByRole('button',{name: 'Up'})).not.toHaveAttribute('disabled')
  });

  it('decrements counter', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button',{name: 'Down'}))

    expect(screen.getByTestId('counter')).toHaveTextContent('-1')
  });

  it('increments counter after 0.5s', async () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button',{name: 'Up'}))

    const counter = await screen.findByText('1')

    expect(counter).toHaveTextContent('1')
  });

  it('checks if initial state is equal to 0', () => {
    renderWithContext(<App />)
    expect(screen.getByTestId('counter')).toHaveTextContent('0')
  })
});

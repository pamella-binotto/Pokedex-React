import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeToggleProvider } from '../components/Theme-toggler/theme-toggler.jsx';
import Home from '../Pages/home';
import { act } from 'react';


jest.mock('../components/components-api.jsx', () => ({
  getPokemons: jest.fn(() => Promise.resolve([
    {
      id: 1,
      name: 'pikachu',
      image: 'https://url.to/pikachu.png',
      types: ['electric'],
      abilities: ['static'],
      moves: [],
    },
    {
      id: 2,
      name: 'bulbasaur',
      image: 'https://url.to/bulbasaur.png',
      types: ['grass'],
      abilities: ['overgrow'],
      moves: [],
    },
  ])),
  getPokemonByName: jest.fn(() =>
    Promise.resolve({
      id: 1,
      name: 'pikachu',
      image: 'https://url.to/pikachu.png',
      types: ['electric'],
      abilities: ['static'],
      moves: [],
    })
  ),
  getPokemonsByType: jest.fn(() => Promise.resolve([])),
}));

test('filtra pokémons por nome digitado', async () => {
  render(
    <BrowserRouter>
      <ThemeToggleProvider>
        <Home />
      </ThemeToggleProvider>
    </BrowserRouter>
  );

  
  expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();
  expect(await screen.findByText(/bulbasaur/i)).toBeInTheDocument();

  const input = screen.getByPlaceholderText(/buscar por nome/i); 

  await act(async () => {
  fireEvent.change(input, { target: { value: 'pika' } });
});




  expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();
  expect(screen.queryByText(/bulbasaur/i)).not.toBeInTheDocument();
});

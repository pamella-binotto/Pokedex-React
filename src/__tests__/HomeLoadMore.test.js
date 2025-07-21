import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeToggleProvider } from '../components/Theme-toggler/theme-toggler.jsx';
import Home from '../Pages/home';

jest.mock('../components/components-api.jsx', () => {
  const firstBatch = [
    {
      id: 1,
      name: 'pikachu',
      image: 'https://url.to/pikachu.png',
      types: ['electric'],
      abilities: ['static'],
      moves: [],
    },
  ];

  const secondBatch = [
    {
      id: 2,
      name: 'bulbasaur',
      image: 'https://url.to/bulbasaur.png',
      types: ['grass'],
      abilities: ['overgrow'],
      moves: [],
    },
  ];

  let callCount = 0;

  return {
    getPokemons: jest.fn(() => {
      callCount++;
      return Promise.resolve(callCount === 1 ? firstBatch : secondBatch);
    }),
    getPokemonByName: jest.fn(() => Promise.resolve({})),
    getPokemonsByType: jest.fn(() => Promise.resolve([])),
  };
});

test('carrega mais pokémons ao clicar no botão', async () => {
  render(
    <BrowserRouter>
      <ThemeToggleProvider>
        <Home />
      </ThemeToggleProvider>
    </BrowserRouter>
  );

  
  expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();

  
  const button = screen.getByRole('button', { name: /carregar mais/i });
  fireEvent.click(button);

  
  expect(await screen.findByText(/bulbasaur/i)).toBeInTheDocument();
});

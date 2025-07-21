import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeToggleProvider } from '../components/Theme-toggler/theme-toggler.jsx';
import Home from '../Pages/home';


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
  getPokemonByName: jest.fn(() => Promise.resolve({})),
  getPokemonsByType: jest.fn((type) => {
    if (type === 'electric') {
      return Promise.resolve([
        {
          id: 1,
          name: 'pikachu',
          image: 'https://url.to/pikachu.png',
          types: ['electric'],
          abilities: ['static'],
          moves: [],
        }
      ]);
    }
    return Promise.resolve([]);
  }),
}));

test('filtra pokémons por tipo selecionado', async () => {
  render(
    <BrowserRouter>
      <ThemeToggleProvider>
        <Home />
      </ThemeToggleProvider>
    </BrowserRouter>
  );

  
  expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();
  expect(await screen.findByText(/bulbasaur/i)).toBeInTheDocument();

  const select = screen.getByRole('combobox'); // encontra o <select>

  fireEvent.change(select, { target: { value: 'electric' } });

  
  expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();
  expect(screen.queryByText(/bulbasaur/i)).not.toBeInTheDocument();
});

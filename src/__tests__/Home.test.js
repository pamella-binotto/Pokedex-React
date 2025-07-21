import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeToggleProvider } from '../components/Theme-toggler/theme-toggler.jsx'; // ✅ importa o provider
import Home from '../Pages/home';

jest.mock('../components/components-api.jsx', () => ({
  getPokemons: jest.fn(() => Promise.resolve([])),
  getPokemonByName: jest.fn(() => Promise.resolve({})),
  getPokemonsByType: jest.fn(() => Promise.resolve([])),
}));

test('exibe o título da Pokédex', async () => {
  render(
    <BrowserRouter>
      <ThemeToggleProvider>
        <Home />
      </ThemeToggleProvider>
    </BrowserRouter>
  );

  const titulo = await screen.findByText(/pokédex/i);
  expect(titulo).toBeInTheDocument();
});

import React from 'react';
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import componentsApi from "../components/components-api";

import Container from "../components/Layout/layout";
import { FlexContainer, Card } from "../components/Layout/card";
import Filter from "../components/filter";
import ButtonLoad from "../components/Button-loading/button-load";
import ThemeButton from "../components/Theme-toggler/theme-button";

const Titulo = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.isDark ? "#ffffff" : "#000000"};
`;

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const limite = 10;

  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState("");

  useEffect(() => {
    async function fetchFiltered() {
      setOffset(0); 

      if (searchName) {
        try {
          const result = await componentsApi.getPokemonByName(searchName);
          setPokemons([result]);
        } catch (error) {
          console.error("Pokémon não encontrado.");
          setPokemons([]);
        }
      } else if (searchType) {
        const result = await componentsApi.getPokemonsByType(searchType, limite, 0);
        setPokemons(result);
        setOffset(limite);
      } else {
        const result = await componentsApi.getPokemons(limite, 0);
        setPokemons(result);
        setOffset(limite);
      }
    }

    fetchFiltered();
  }, [searchName, searchType]);

  const loadPokemons = async () => {
    if (searchName) return; 

    let newPokemons = [];

    if (searchType) {
      newPokemons = await componentsApi.getPokemonsByType(searchType, limite, offset);
    } else {
      newPokemons = await componentsApi.getPokemons(limite, offset);
    }

    setPokemons((prev) => [...prev, ...newPokemons]);
    setOffset((prev) => prev + limite);
  };

  return (
    <Container data-testid="home-page">
      <ThemeButton />
      <Titulo>Pokedex</Titulo>

      <Filter
        searchName={searchName}
        setSearchName={setSearchName}
        searchType={searchType}
        setSearchType={setSearchType}
      />

      <FlexContainer>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id}>
            <Link
              to={`/details/${pokemon.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={pokemon.image} alt={pokemon.name} />
              <p>{pokemon.name}</p>
              <p style={{ fontSize: "0.85rem", opacity: 0.6 }}>
                Tipo: {pokemon.types.join(", ")}
              </p>
            </Link>
          </Card>
        ))}
      </FlexContainer>

      {!searchName && <ButtonLoad onClick={loadPokemons} />}
    </Container>
  );
}

export default Home;

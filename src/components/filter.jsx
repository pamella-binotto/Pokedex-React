import React from 'react';
import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  input, select {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid
      ${({ theme }) =>
        theme.background === "#0a192f" ? "#ffffff" : theme.text};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) =>
      theme.background === "#0a192f" ? "#ffffff" : theme.text};
    font-size: 1rem;
  }

  input::placeholder {
    color: ${({ theme }) =>
      theme.background === "#0a192f" ? "#ffffffaa" : "#666666"};
  }

  @media (max-width: 600px) {
  flex-direction: column;
  gap: 0.75rem;
}
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  line-height: 1;
`;

function Filter({ searchName, setSearchName, searchType, setSearchType }) {
  return (
    <FilterWrapper>
       <InputWrapper>
    <input
      type="text"
      placeholder="Buscar por nome..."
      value={searchName}
      onChange={(e) => setSearchName(e.target.value)}
    />
    {searchName && (
      <ClearButton onClick={() => setSearchName("")}>×</ClearButton>
    )}
  </InputWrapper>

      <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
        <option value="">Todos os tipos</option>
        <option value="grass">Grama</option>
        <option value="fire">Fogo</option>
        <option value="water">Água</option>
        <option value="electric">Elétrico</option>
        <option value="bug">Inseto</option>
        <option value="normal">Normal</option>
        <option value="poison">Veneno</option>
        <option value="ground">Terra</option>
        <option value="fairy">Fada</option>
       
      </select>
    </FilterWrapper>
  );
}

export default Filter;

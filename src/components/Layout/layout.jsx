import React from 'react';
import styled from "styled-components";


const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 2rem;
  transition: all 0.3s ease;
`;

export default Container;
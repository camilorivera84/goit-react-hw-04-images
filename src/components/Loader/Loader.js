import React from 'react';
import { Dna } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const Loader = () => (
  <LoaderContainer>
    <Dna color="#00BFFF" height={80} width={80} />
  </LoaderContainer>
);

export default Loader;

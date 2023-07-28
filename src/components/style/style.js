import styled from 'styled-components';

export const GalleryContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style-type: none;
  padding: 0;
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px; /* Ajusta la altura según tus necesidades */
`;

export const ModalContainer = styled.div`
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
`;

export const SearchContainer = styled.div`
  background-color: blue;
  display: flex;
  justify-content: center;
  height: 60px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  width: 300px;
`;

export const SearchIcon = styled.span`
  padding: 10px;
  color: white;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 10px;
  width: 200px;
  margin: 0 auto;
`;

export const LoadMoreButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: Dodgerblue;
  color: white;
  border: none;
  border-radius: 5px;

  cursor: pointer;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchIcon,
} from '../style/style';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  const handleIconClick = () => {
    onSubmit(searchQuery);
    setSearchQuery(''); // Reiniciar el estado searchQuery a una cadena vacía para nueva búsqueda
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="query"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Buscar imágenes..."
        />
        <SearchIcon onClick={handleIconClick}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </SearchIcon>
      </SearchForm>
    </SearchContainer>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearcherWrapper, SearcherIcon, SearcherInput } from './Searcher.styled';

function Searcher() {
  return (
    <SearcherWrapper>
      <SearcherIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearcherIcon>
      <SearcherInput placeholder="Search..." />
    </SearcherWrapper>
  );
}

export default Searcher;

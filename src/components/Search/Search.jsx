import React from 'react';
import { SearchWrap, SearchInternal, Button, Input } from './styles';

const Search = () => {
  return (
    <SearchWrap>
      <SearchInternal>
        <Button>
          <i className='fa fa-search'></i>
        </Button>
        <Input type='text' placeholder='Search Pokemon by Number or Name' />
      </SearchInternal>
    </SearchWrap>
  );
};

export default Search;

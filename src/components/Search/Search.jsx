import React, { useState } from 'react';
import { SearchWrap, SearchInternal, Button, Input } from './styles';

const Search = () => {
  // const [text, setText] = useState('');

  return (
    <SearchWrap>
      <SearchInternal>
        <Button>
          <i className='fa fa-search'></i>
        </Button>
        <Input
          // onChange={(e) => setText(e.target.value)}
          // value={text}
          type='text'
          placeholder='Search Pokemon by Number or Name'
        />
      </SearchInternal>
    </SearchWrap>
  );
};

export default Search;

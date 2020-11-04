import React, { useEffect, useState } from 'react';
import { SearchWrap, SearchInternal, Button, Input } from './styles';

const Search = (props) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    props.search(text);
  }, [text]);

  return (
    <SearchWrap>
      <SearchInternal>
        <Button>
          <i className='fa fa-search'></i>
        </Button>
        <Input
          onChange={handleChange}
          value={text}
          type='text'
          placeholder='Search Pokemon by Name'
        />
      </SearchInternal>
    </SearchWrap>
  );
};

export default Search;

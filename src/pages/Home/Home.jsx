import React, { useEffect, useState } from 'react';
import { Wrapper, PokeContainer } from './styles';
import Card from '../../components/Card/Card';
import API from '../../api/api';

function Home() {
  const [pokemons, setPokemons] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    API.get('pokemon/1')
      .then((res) => {
        if (isMounted) {
          // console.log(res);
          setPokemons(res.data);
          setLoading(true);
        }
      })
      .catch((err) => {
        setError(err.message);
        setLoading(true);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  console.log(pokemons.id);

  return (
    <Wrapper>
      <h1>Pokedex</h1>
      <PokeContainer>
        {isLoading ? (
          <ul style={{ paddingInlineStart: '0px', textAlign: 'center' }}>
            {error ? (
              <li>{error.message}</li>
            ) : (
              <Card id={pokemons.id} name={pokemons.name} types={pokemons.types} />
            )}
          </ul>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </PokeContainer>
    </Wrapper>
  );
}

export default Home;

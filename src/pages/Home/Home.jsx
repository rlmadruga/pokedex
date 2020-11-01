import React, { useEffect, useState } from 'react';
import { Wrapper, PokeContainer } from './styles';
import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';
import API from '../../api/api';
import {} from '../../components/Navbar/Navbar';
import Navbar from '../../components/Navbar/Navbar';

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
    <>
      <Navbar />
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
              <Loading />
            </div>
          )}
        </PokeContainer>
      </Wrapper>
    </>
  );
}

export default Home;

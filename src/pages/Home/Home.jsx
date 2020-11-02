import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Wrapper, PokeContainer } from './styles';
import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';
import Search from '../../components/Search/Search';
import API from '../../api/api';
import Navbar from '../../components/Navbar/Navbar';

function Home() {
  const [pokemons, setPokemons] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // const [errorLog, setErrorLog] = useState('');

  const { currentUser, logout } = useAuth();

  const handleCardDetails = (id) => {};

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
      <Navbar currentUser={currentUser} logout={logout} />
      <Wrapper>
        <Search />
        <PokeContainer>
          {isLoading ? (
            <ul style={{ paddingInlineStart: '0px', textAlign: 'center' }}>
              {error ? (
                <li>{error.message}</li>
              ) : (
                <Card
                  onClick={() => handleCardDetails(pokemons.id)}
                  id={pokemons.id}
                  name={pokemons.name}
                  types={pokemons.types}
                />
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

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Wrapper, PokeContainer } from './styles';
import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';
import Search from '../../components/Search/Search';
import API from '../../api/api';
import Navbar from '../../components/Navbar/Navbar';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  //const [nexPageURL, setNextPageURL] = useState();
  // const [prevPageURL, setPrevPageURL] = useState();

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { currentUser, logout } = useAuth();

  const handleCardDetails = (id) => {};

  // const getPokemons = async () => {
  //   const url = 'pokemon';
  //   const res = await API.get(url);

  //   setPokemons(res.data.results);

  //   getPokemonDetails(pokemons);
  // };

  // const getPokemonDetails = async (pokemons) => {
  //   pokemons.map((poke) => {
  //     let urlSplit = poke.url.split('/');
  //     let id = urlSplit[6];

  //     API.get(`pokemon/${id}`)
  //       .then((res) => {
  //         let data = res.data;
  //         let temp = pokemonDetails.length !== 0 ? [...pokemonDetails, data] : null;

  //         setPokemonDetails([...temp]);
  //       })
  //       .catch((err) => {
  //         setError(err.message);
  //         setLoading(true);
  //       });
  //   });
  // };

  useEffect(() => {
    let isMounted = true;

    API.get('pokemon/1')
      .then((res) => {
        if (isMounted) {
          // console.log(res);
          setPokemons([res.data]);
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
                pokemons.map((pokemon) => {
                  return (
                    <Card
                      key={pokemon.id}
                      onClick={() => handleCardDetails(pokemon.id)}
                      id={pokemon.id}
                      name={pokemon.name}
                      types={pokemon.types}
                    />
                  );
                })
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

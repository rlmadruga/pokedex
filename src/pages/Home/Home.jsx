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
  const [nexPageURL, setNextPageURL] = useState();
  const [prevPageURL, setPrevPageURL] = useState();

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { currentUser, logout } = useAuth();

  const handleCardDetails = (id) => {};

  const getPokemons = async () => {
    const getPokemonData = await API.get('pokemon');

    let pokemons_data = [...pokemons, ...getPokemonData.data.results];
    setPokemons(pokemons_data);
    setNextPageURL(getPokemonData.next);
    setPrevPageURL(getPokemonData.previous);

    // let temp2 = [];

    await Promise.all(
      getPokemonData.data.results.map(async (poke) => {
        let url = poke.url.split('/');
        let id = url[6];

        let pokeDetails = await API.get(`pokemon/${id}`);
        let pokeDetails_data = pokeDetails.data;

        let temp =
          pokemonDetails.includes(pokeDetails_data) === true
            ? [...pokemonDetails]
            : pokemonDetails.push(pokeDetails_data);

        let temp2 = [...pokemonDetails];

        temp2.sort((a, b) => a.id - b.id);
        setPokemonDetails([...temp2]);
      })
    );
  };

  useEffect(() => {
    getPokemons();
    setLoading(true);
  }, []);

  return (
    <>
      <Navbar currentUser={currentUser} logout={logout} />
      <Wrapper>
        <Search />
        <PokeContainer>
          {isLoading && pokemonDetails.length !== 0 ? (
            <ul
              style={{
                paddingInlineStart: '0px',
                textAlign: 'center',
                display: 'contents',
              }}
            >
              {error ? (
                <li>{error.message}</li>
              ) : (
                pokemonDetails.map((pokemon) => {
                  return (
                    <Card
                      key={pokemon.id + pokemon.name}
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

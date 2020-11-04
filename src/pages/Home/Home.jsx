import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Wrapper, PokeContainer } from './styles';
import Card from '../../components/Card/Card';
import CardDetails from '../../components/CardDetails/CardDetails';
import Loading from '../../components/Loading/Loading';
import Search from '../../components/Search/Search';
import API from '../../api/api';
import Navbar from '../../components/Navbar/Navbar';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);

  // const [nexPageURL, setNextPageURL] = useState();
  // const [prevPageURL, setPrevPageURL] = useState();

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { currentUser, logout } = useAuth();

  const [cardVisible, setCardVisible] = useState(false);
  const [pokemonID, setPokemonID] = useState(0);

  const handleCardDetails = (id) => {
    let i = id - 1;
    setPokemonID(i);
    console.log(pokemonDetails[pokemonID].name);
    setCardVisible(true);
  };

  const getPokemons = async () => {
    const getPokemonData = await API.get('pokemon');

    let pokemons_data = [...pokemons, ...getPokemonData.data.results];
    setPokemons(pokemons_data);

    await Promise.all(
      getPokemonData.data.results.map(async (poke) => {
        let url = poke.url.split('/');
        let id = url[6];

        let pokeDetails = await API.get(`pokemon/${id}`);
        let pokeDetails_data = pokeDetails.data;

        let temp =
          pokemonDetails.includes(pokeDetails_data.id) === true
            ? [...pokemonDetails]
            : pokemonDetails.push(pokeDetails_data);

        let temp2 = [...pokemonDetails];

        temp2.sort((a, b) => a.id - b.id);
        setPokemonDetails([...temp2]);
      })
    );
    setLoading(true);
  };

  useEffect(() => {
    getPokemons();
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
                    <div onClick={() => handleCardDetails(pokemon.id)}>
                      <Card
                        key={pokemon.id + pokemon.name}
                        id={pokemon.id}
                        name={pokemon.name}
                        types={pokemon.types}
                      />
                    </div>
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
        {cardVisible && (
          <CardDetails
            visible={cardVisible}
            setVisible={setCardVisible}
            id={pokemonID}
            name={pokemonDetails[pokemonID].name}
            types={pokemonDetails[pokemonID].types}
            height={pokemonDetails[pokemonID].height}
            weight={pokemonDetails[pokemonID].weight}
          />
        )}
      </Wrapper>
    </>
  );
}

export default Home;

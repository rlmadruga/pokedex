import React from 'react';
import { CardWrapper, ImgContainer, Info } from './styles';
import { pokemonTypeColors, pokemonTypes } from '../../helper/helper';
import FavoriteIcon from '../../assets/images/Favourite_icon.svg';

const Card = ({ name, id, types }) => {
  const namePokemon = name[0].toUpperCase() + name.slice(1);
  const typePokemon = types[0].type.name;
  console.log('typePokemon', typePokemon);

  const type = pokemonTypes.find((typeColor) => typeColor === typePokemon);
  console.log('type', type);

  const color = pokemonTypeColors[type];
  console.log('color', color);

  return (
    <CardWrapper color={color}>
      <img className='img-favorite' src={FavoriteIcon} alt='Favorite Icon' />
      <ImgContainer>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt={namePokemon}
        />
      </ImgContainer>
      <Info>
        <span>#{id.toString().padStart(3, '0')}</span>
        <h3 className='name'>{namePokemon}</h3>
        <small>
          Tipo: <span className='none'>{typePokemon}</span>
        </small>
      </Info>
    </CardWrapper>
  );
};

export default Card;

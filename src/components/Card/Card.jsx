import React from 'react';
import { CardWrapper, ImgContainer, Info } from './styles';
import { pokemonTypeColors, pokemonTypes } from '../../helper/helper';

const Card = ({ name, id, types }) => {
  const namePokemon = name[0].toUpperCase() + name.slice(1);
  const typePokemon = types.map((type) => type.type.name);
  const type = pokemonTypes.find((type) => typePokemon.indexOf(type) > -1);
  const color = pokemonTypeColors[type];

  <CardWrapper color={color}>
    <ImgContainer>
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        alt={namePokemon}
      />
    </ImgContainer>
    <Info>
      <span>#{id.toString().padStart(3, '0')}</span>
      <h3 class='name'>{namePokemon}</h3>
      <small>
        Tipo: <span>{type}</span>
      </small>
    </Info>
  </CardWrapper>;
};

export default Card;

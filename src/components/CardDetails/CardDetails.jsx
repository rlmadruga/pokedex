import React from 'react';
import {
  CardDetailsWrapper,
  CardDetailsMain,
  CardDetailsImage,
  CardDetailsContainer,
  CardDetailsTitle,
  CardDetailsSubTitle,
  CardDetailsSubText,
  CardDetailsText,
} from './styles';

const CardDetails = ({ id, ...props }) => {
  let imagePokemon =
    `https://pokeres.bastionbot.org/images/pokemon/${id + 1}.png` ||
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      id + 1
    }.png`;

  const handleCardDetailsWrapper = () => {
    props.setVisible(false);
  };

  return (
    <>
      {props.visible && (
        <CardDetailsWrapper>
          <CardDetailsMain>
            <CardDetailsImage>
              <img src={imagePokemon} alt='Pokemon' />
            </CardDetailsImage>
            <CardDetailsContainer>
              <i className='fas fa-times' onClick={handleCardDetailsWrapper} />
              <CardDetailsTitle>
                {props.name[0].toUpperCase() + props.name.slice(1)}
              </CardDetailsTitle>
              <CardDetailsSubTitle></CardDetailsSubTitle>
              <CardDetailsText>Weight:</CardDetailsText>
              <CardDetailsSubText>{props.weight}</CardDetailsSubText>
              <CardDetailsText>Height:</CardDetailsText>
              <CardDetailsSubText>{props.height}</CardDetailsSubText>
              <CardDetailsText>Types:</CardDetailsText>
              <CardDetailsSubText>
                {props.types.map((type) => type.type.name).join(', ')}
              </CardDetailsSubText>
            </CardDetailsContainer>
          </CardDetailsMain>
        </CardDetailsWrapper>
      )}
    </>
  );
};

export default CardDetails;

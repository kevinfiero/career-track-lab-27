import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character._id}>
      <Character 
        id={character._id} 
        name={character.name} 
        image={character.photoUrl} 
      /> 
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;

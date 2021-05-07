import React from 'react';
import data from './data';

class PokemonDetails extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const pokemon = data.filter(pokemon => pokemon.id === Number(id));
    return(
      <h1>{JSON.stringify(pokemon)}</h1>
    );
  }
}

export default PokemonDetails; 

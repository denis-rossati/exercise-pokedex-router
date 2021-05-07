import React from 'react';
import PokemonFoundAt from './PokemonFoundAt';
import data from './data';

class PokemonDetails extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const [ pokemon ] = data.filter(pokemon => pokemon.id === Number(id));
    const {
      averageWeight,
      foundAt,
      name,
      type,
      image, 
      summary
    } = pokemon;
    return(
      <section className='detailedPokemon'>
        <div className={ `pokemon detailedPokemonCard` }>
          <div>
            <p>{ name }</p>
            <p>Type: { type }</p>
            <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
          </div>
          <img src={image} alt={`${name} sprite`} />
        </div>
        <p>
          Summary: <br />
          { summary }
        </p>
        <PokemonFoundAt pokemon={foundAt} />
      </section>
    );
  }
}

export default PokemonDetails; 

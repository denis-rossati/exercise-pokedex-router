import React from 'react';

class PokemonFoundAt extends React.Component {
  render() {
    const { pokemon } = this.props;
    return(
      <section>
        {pokemon.map(item => {
          return(
            <section>
              <p>It can be found at:</p>
              <p>{ item.location }</p>
              <img src={ item['map'] } alt='pokemon found at' />
            </section>
          );
        })}
      </section>
    );
  }
}

export default PokemonFoundAt;

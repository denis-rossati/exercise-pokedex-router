import React from 'react';

class About extends React.Component {
  render() {
    return (
      <section className='aboutBigParent'>
      <h2>O que é uma pokedex?</h2>
      <p>
        É uma enciclopédia virtual portátil de alta tecnologia que os treinadores
        Pokémon transportam para registra todas as espécies diferentes de Pokémon.
      </p>
      <img 
        src='https://3.bp.blogspot.com/-X9hsxdD2qfc/WQdACvQYaeI/AAAAAAAAFp4/vhr4Qbz9FdscwvszKsKFvsSyP37mAq10QCLcB/s640/Pokedex_Butterfree.gif'
        alt='pokedex em funcionamento' />
      <p>
        Ela analisa um Pokémon selvagem e, caso ele seja desconhecido, o adiciona em seu
        banco de dados.
        Alem de mostrar as informações básicas do Pokémon, a pokédex parece ter um sensor
        de dificuldade, pois se o treinador tiver duvidas ela é ativada automaticamente, 
        mostrando também, informações sobre o confinamento dos Pokémon em suas pokébolas.
      </p>
      </section>
    );
  }
}

export default About;
import React from 'react';

class PageNotFound extends React.Component {
  render() {
    return(
      <section className='PageNotFound'>
        <div>
          <p>
            Página não encontrada :(
          </p>
        </div>
        <img
          src='https://sm.ign.com/ign_br/screenshot/default/squirtlecrying_qsb7.gif'
          alt='squirtle crying'
        />
      </section>
    );
  }
}

export default PageNotFound;
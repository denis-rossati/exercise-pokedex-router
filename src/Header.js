import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

function Header() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <section className='fixedLinksSection'>
        <Link className='fixedLinks' to='/'> Pokedex</Link>
        <Link className='fixedLinks' to='/About'>Sobre</Link>
      </section>
    </div>
  );
}

export default Header;

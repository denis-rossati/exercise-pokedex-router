import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import About from './About';
import PokemonDetails from './PokemonDetails';
import PageNotFound from './PageNotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/pokemon/:id' render={(props) => <PokemonDetails {...props} />} />
        <Route path='/about' component={ About } />
        <Route exact path='/' component={ App } />
        <Route component={ PageNotFound }/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

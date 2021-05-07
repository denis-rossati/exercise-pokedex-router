import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import About from './About';
import PageNotFound from './PageNotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={ App } />
        <Route path='/about' component={ About } />
        <Route component={ PageNotFound }/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

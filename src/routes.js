'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import ExamplePage from './components/ExamplePage';
import PokemonPage from './components/pages/PokemonPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="example-page/" component={ExamplePage}/>
    <Route path="example-page/:id" component={ExamplePage}/>
    <Route path="pokemon/" component={ExamplePage}/>
    <Route path="pokemon/:pokeId" component={PokemonPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;

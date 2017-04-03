'use strict';

import React from 'react';
import { Link } from 'react-router';
import ajax from '@fdaciuk/ajax';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      isFetchingPokemons: false
    }
  }

  componentDidMount() {
    this.getAllPokemons()
  }

  getAllPokemons(){
    this.setState({ isFetchingPokemons: true });
    return ajax().get('http://pokeapi.co/api/v2/pokedex/1/').then((data) => {
      this.setState({ pokemons: data.pokemon_entries, isFetchingPokemons: false });
    });
  }


  render() {
    const pokemons = this.state.pokemons;
    return (
      <div className="home">
          <div className="container">
            <h1 className="text-center">This is the home page of our React Template</h1>
            <div>
              { this.state.isFetchingPokemons && <div>Carregando...</div> }
            </div>            
            {pokemons.map((pokemon) => {
              return (
                <li key={pokemon.entry_number}>
                  #{pokemon.entry_number}: <Link className="text-capitalize" to={`/pokemon/${pokemon.entry_number}`}>{pokemon.pokemon_species.name}</Link>
                </li>
              );
            })}
          </div>
      </div>
    );
  }
}

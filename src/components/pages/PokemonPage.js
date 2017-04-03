import React from 'react';
import { Link } from 'react-router';
import ajax from '@fdaciuk/ajax';


export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      isFetchingPokemon: false
    }
  }

  componentDidMount() {
    this.getCurrentPokemon(this.props.params.pokeId);
  }

  getCurrentPokemon (pokeId) {
    this.setState({ isFetchingPokemon: true });
    return ajax().get(`http://pokeapi.co/api/v2/pokemon/${pokeId}`).then((data) => {
      this.setState({ pokemon: data, isFetchingPokemon: false });
    });
  }
  render() {
    const pokemon = this.state.pokemon;
    return (
      <div>
          <div className="container">
            {this.state.isFetchingPokemon && <div>Carregando...</div>}
            <h1 className="text-capitalize"> #{pokemon.id} - {pokemon.name}</h1>
            {pokemon.sprites && <img src={pokemon.sprites.front_default} alt=""/>}
          </div>
      </div>
    );
  }
}

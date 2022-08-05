import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { PokemonForm } from './PokemonForm';
import { PokemonInfo } from './PokemonInfo';

export class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

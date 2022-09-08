import { useState } from 'react';
import { useGetPokemonByNameQuery } from 'redux/pokemon';
import { Spinner } from 'components/Spinner/Spinner';

export const HomePage = () => {
  const [pokemonName, setPokemonName] = useState('');
  const { data, error, isFetching, isError } = useGetPokemonByNameQuery(
    pokemonName,
    {
      skip: pokemonName === '',
    },
  );

  console.log('data: ', data);
  console.log('error: ', error);
  console.log('isFetching: ', isFetching);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setPokemonName(form.elements.pokemonName.value);
    form.reset();
  };

  const showNotFoundError = isError && error.originalStatus === 404;
  const showPokemonData = data && !isFetching && !isError;

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="pokemonName" />
        <button type="submit">Search</button>
      </form>

      {isFetching && <Spinner />}

      {showNotFoundError && (
        <p>
          Покемона з імʼям <b>{pokemonName}</b> немає :(
        </p>
      )}

      {showPokemonData && <h1>{data.name}</h1>}
    </>
  );
};

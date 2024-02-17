import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10'); // Limitado aos 10 primeiros Pokémons por simplicidade
        setPokemons(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar Pokémons:', error);
      }
    };

    fetchPokemons();
  }, []);

  const fetchPokemonDetails = async (pokemon) => {
    try {
      const response = await axios.get(pokemon.url);
      setSelectedPokemon(response.data);
    } catch (error) {
      console.error('Erro ao buscar detalhes do Pokémon:', error);
    }
  };

  console.log(selectedPokemon)

  return (
    <div>
      <h1>Pokédex</h1>
      <div className="pokemon-list">
        <h2>Lista de Pokémons:</h2>
        <ul>
          {pokemons.map((pokemon, index) => (
            <li key={index} onClick={() => fetchPokemonDetails(pokemon)}>
              {pokemon.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedPokemon && (
        <div className="pokemon-details">
          <h2>Detalhes do Pokémon:</h2>
          <p>Nome: {selectedPokemon.name}</p>
          <p>Peso: {selectedPokemon.weight}</p>
          <p>Altura: {selectedPokemon.height}</p>
          <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
        </div>
      )}
    </div>
  );
};

export default Pokedex;

import React, { Component } from "react";
import { pokeContainer, pokeList, pokeOption } from "../styles/styles";

const Pokedex = (props) => {
  //const updateParent = props.updateParent
  //const { updateParent } = props;
  console.log(props.pokemons)
  return (
    <div style={pokeContainer}>
      <h3>POKEDEX</h3>
      <div style={pokeList}>
        {props.pokemons.map((pokemon) => (
          <p
            key={pokemon.id}
            onClick={() =>
              props.updateParent(pokemon)
            }
            style={pokeOption}
          >
            {pokemon.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Pokedex;

import React, {useEffect, useState} from 'react';
import './App.css';
import {iPokemon, Pokemon} from "./Components/Pokemon";
import pokeDex from "./Pokedex_logo.png"



function App() {

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then(response => response.json())
        .then(response => {
         setPokemon(response.results);
        })
  }, []);


  const [pokemon, setPokemon] = useState<iPokemon[]>([])


  const moreInfo = (pokemonPost: iPokemon) => {



        const newPokemon = pokemon.map(pokemonMatch => {
          if(pokemonMatch.name === pokemonPost.name){
            pokemonMatch.showMoreInfo=!pokemonMatch.showMoreInfo;
            return pokemonMatch;
          }
          return pokemonMatch;
        })
    setPokemon(newPokemon);
  }

  const removePokemon = (pokemonPost: iPokemon, key: number) => {

      const newPokemon = [...pokemon]
          newPokemon.splice(key, 1)
      setPokemon(newPokemon)
}

  return (
    <>
      <div className={"app"}>
      <div className={"header"}>
      <img src={pokeDex} alt={"Pokedex"}/>
      </div>
      <h2 className={"grid"}>
        {pokemon.map(( pokemonPost, index) => {
            return <ul> <Pokemon pokemonPost={post => moreInfo(post)} pokemonRemove ={(post: iPokemon, key) => removePokemon(post, key)} pokemon={pokemonPost} key={index}  pokeKey={index}/> </ul>
        })}
      </h2>
      </div>
    </>
  );
}

export default App;

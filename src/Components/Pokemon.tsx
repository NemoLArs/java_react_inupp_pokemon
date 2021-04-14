import React, {useEffect, useState} from 'react';
import {MoreInfo} from "./MoreInfo";
import "./Pokemon.css"



export interface iPokemon {

    key: number;
    name: string;
    url: string;
    showMoreInfo?: boolean;
}

export interface iProps{

    pokemonPost: (post: iPokemon) => any;
    pokemonRemove: (post: iPokemon, key: number) => any;
    pokemon: iPokemon;
    pokeKey: number;
}



export const Pokemon:React.FC<iProps> = ({

    pokeKey,
    pokemon,
    pokemonRemove,
    pokemonPost}) => {



    useEffect(() => {
        fetch(pokemon.url)
            .then(response => response.json())
            .then(response => {
                setImage(response.sprites.other.dream_world.front_default);

            })
    }, );

    const [image, setImage] = useState()


    return(

        <>
            <div className={"container"}>
            <h1>
                {pokemon.name}
            </h1>
            <img className={"image"} src={image} alt={""}/>
            <button
                onClick={() => pokemonPost(pokemon)}>
                {!pokemon.showMoreInfo ? "Show More Info" : "Show Less Info"}
            </button>
            <button
                onClick={() => pokemonRemove(pokemon, pokeKey)}>
                Remove
            </button>
           {pokemon.showMoreInfo ? <MoreInfo pokemon={pokemon} pokemonPost={pokemonPost} pokemonRemove={pokemonPost}  pokeKey={pokeKey}/> : null }
            </div>



        </>
    )
}

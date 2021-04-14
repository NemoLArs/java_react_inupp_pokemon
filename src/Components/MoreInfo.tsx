import React, {useEffect, useState} from 'react';
import {iProps} from "./Pokemon";
import "./MoreInfo.css";



export interface pokeInfo {

    abilities: any;
    base_experience: string;
    forms: string;
    game_indices: string;
    height: string
    held_items: string;
    id: string;
    is_default: boolean;
    location_area_encounters: string;
    moves: any;
    name: string;
    order: string;
    past_types: string;
    species: string;
    sprites: any;
    stats: string;
    types: any;
    weight: number;

}

export const MoreInfo:React.FC<iProps> = ({


         pokemon}) => {



    useEffect(() => {
        fetch(pokemon.url)
            .then(response => response.json())
            .then(response => {
                setInfo(response);

            })
    }, []);


    const [info, setInfo] = useState<pokeInfo>()


    return(

        <>
            <div>
                <h3>
                    Abilites:
                    {info?.abilities.map((abilityPost: { ability: { name: any; }; }) => {
                         return <li> {abilityPost.ability.name} </li>
                    })}
                </h3>
                <h3>
                    Height:
                    <br/>
                    {info?.height}
                </h3>
                <h3>
                    Moves:
                    {info?.moves.map((movesPost: { move: { name: any; };}) => {
                        return <li> {movesPost.move.name} </li>
                    })}
                </h3>

            </div>
        </>

    )
}

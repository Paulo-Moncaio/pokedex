import { Container } from "./styles";
import img from "../../assets/poke-images/bulbasaur.png"

type Pokemon = {
    pokedexId: String;
    name: String;
    type1: 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice' |
    'fighting' | 'poison' | 'ground' | 'flying' | 'psychic' | 'bug' |
     'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy';
    type2: 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice' |
    'fighting' | 'poison' | 'ground' | 'flying' | 'psychic' | 'bug' |
     'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy';
    total: Number;
    hp: Number;
    attack: Number;
    defense: Number;
    speedAtk: Number;
    speedDef: Number;
    speed: Number;
    generation: String;
    legendary: Boolean;
}

interface PokecardProps {
    pokemon: Pokemon;
}

export function Pokecard({pokemon} : PokecardProps) {

    const pokemonImg = `images/${pokemon.pokedexId}.png`

    return (
        // onClick={abrirModal}
        <Container pokemon={pokemon} >
            <p>Nº {pokemon.pokedexId}</p>
            <h2>{pokemon.name}</h2>
            <img src={pokemonImg} alt="pokemon"/>
        </Container>
    )
};

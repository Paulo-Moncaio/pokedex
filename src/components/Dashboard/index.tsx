import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Pokecard } from "../Pokecard";
import { Container } from "./styles";
import ReactLoading from 'react-loading';

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

interface DashboardProps {
    name: string,
}

export function Dashboard( props : DashboardProps ) {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPokemonsByName = async (name: string) => {
        await api
            .get('/api/pokemon', { params: { name } })
            .then((response) => setPokemons(response.data))
        setIsLoading(false);
    };

    useEffect(() => {
        setIsLoading(true);
        fetchPokemonsByName(props.name);
    }, [props.name])

    const items = pokemons.map((pokemon, index) => {
        console.log(pokemon);
        
        return (
            <Pokecard key={index} pokemon={pokemon} />
        )
    })

    // if(isLoading){
    //     return <ReactLoading type="spinningBubbles" />
    // }

    return (
        <>
        <Container>
            {isLoading && <ReactLoading className="loading" type="spinningBubbles" />}
            {pokemons.map((pokemon, index) => (
                <Pokecard key={index} pokemon={pokemon} />
                ))}
        </Container>
        </>
    )
}

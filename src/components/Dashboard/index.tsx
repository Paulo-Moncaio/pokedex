import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { Pokecard } from "../Pokecard";
import { Container } from "./styles";
import ReactLoading from 'react-loading';
import { SelectedTypeContext } from "../../context/SelectedTypeContext";

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
    name: String,
    // type: string
}

export function Dashboard( { name } : DashboardProps ) {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const selectedType = useContext(SelectedTypeContext)
    console.log("type: " + selectedType);
    console.log(typeof selectedType);
    

    const fetchPokemons = async (name: String, selectedType: String) => {
        await api
            .get('/api/pokemon', { params: { name, type1: selectedType } })
            .then((response) => setPokemons(response.data))
        setIsLoading(false);
    };

    useEffect(() => {
        setIsLoading(true);
        fetchPokemons(name, selectedType);
    }, [name])

    // if(isLoading){
    //     return <ReactLoading type="spinningBubbles" />
    // }

    return (
        
        <Container>
            {isLoading && <ReactLoading className="loading" type="spinningBubbles"/>}
            {!isLoading && pokemons.map((pokemon, index) => (
                <Pokecard key={index} pokemon={pokemon} />
                ))}
        </Container>
         
    )
}

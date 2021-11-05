import styled from "styled-components";

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

const colors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
}


export const Container = styled.div<PokecardProps>`
  margin: 0.5rem;
  
  ${(props) => props.pokemon.legendary ? `
    border-width: 0.2rem;
    border-style: solid;
    border-image: linear-gradient(to right bottom, #fbe07f, #c39330);
    border-image-slice: 1;
  ` : `
    border: 0.2rem solid #eeeeee;
  `}
  
  border-radius: 0.5rem;
  width: 200px;
  height: 280px;
  background: ${(props) => 'linear-gradient(125deg,'+ colors[props.pokemon.type1] + " 50%," + (props.pokemon.type2 ? colors[props.pokemon.type2] : colors[props.pokemon.type1]) + " 50%)"};
  /* linear-gradient(135deg, ${(props) => colors[props.pokemon.type1] } 50%, ${(props) => colors[props.pokemon.type2]} 50%) */
   
  p {
    ${(props) => props.pokemon.legendary ? `
      background: linear-gradient(to right bottom, #fbe07f, #c39330);
      color: var(--text);
    ` : `
      background: linear-gradient(150deg, #eeeeee 25%, #c1c1c1 60%);
      border-top-left-radius: 0.25rem;
    `}
    padding: 0.1rem 0.2rem;
    font-size: 0.75rem;
    width: fit-content;
    border-bottom-right-radius: 0.5rem;
  }
  h2{ 
    text-align: center;
    text-transform: capitalize;
    color: var(--text);
  }

  img { 
    width: 200px;
  }
`;
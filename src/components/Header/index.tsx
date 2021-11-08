import { Container, FilterTypes } from "./styles";
import logo from "../../assets/pokedex.png"
import { useState } from "react";
import { PokeButton } from "../PokeButton";

interface HeaderProps {
    onChangeInputText: (e:React.ChangeEvent<HTMLInputElement>) => void,
    inputValue: string
}

export function Header({onChangeInputText, inputValue} : HeaderProps) {
    const [searchText, setSearchText] = useState("");
    const [selectedType, setSelectedType] = useState('');

    const types = ['normal' , 'fire' , 'water' , 'electric' , 'grass' , 'ice' ,
    'fighting' , 'poison' , 'ground' , 'flying' , 'psychic' , 'bug' ,
     'rock' , 'ghost' , 'dragon' , 'dark' , 'steel' , 'fairy']

    return (
        <Container>
            <img src={logo} alt="logo pokedex" />
            <input 
                type="text" 
                placeholder="Search" 
                value={inputValue} 
                onChange={onChangeInputText} 
            />
            <FilterTypes>
                {types.map(type => {
                    return <PokeButton type={type} />
                })}
            </FilterTypes>
        </Container>
    )

}
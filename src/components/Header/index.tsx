import { Container, FilterTypes } from "./styles";
import logo from "../../assets/pokedex.png"
import { useState } from "react";

interface HeaderProps {
    onChangeInputText: (e:React.ChangeEvent<HTMLInputElement>) => void,
    inputValue: string
}

export function Header({onChangeInputText, inputValue} : HeaderProps) {
    const [searchText, setSearchText] = useState("");
    const [selectedType, setSelectedType] = useState('');

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
                <button className="normal" >normal</button>
                <button className="fire" >fire</button>
                <button className="water" >water</button>
                <button className="electric" >electric</button>
                <button className="grass" >grass</button>
                <button className="ice" >ice</button>
                <button className="fighting" >fighting</button>
                <button className="poison" >poison</button>
                <button className="ground" >ground</button>
                <button className="flying" >flying</button>
                <button className="psychic" >psychic</button>
                <button className="bug" >bug</button>
                <button className="rock" >rock</button>
                <button className="ghost" >ghost</button>
                <button className="dragon" >dragon</button>
                <button className="dark" >dark</button>
                <button className="steel" >steel</button>
                <button className="fairy" >fairy</button>
            </FilterTypes>
        </Container>
    )

}
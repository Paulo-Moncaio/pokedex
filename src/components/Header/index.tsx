import { Container, FilterTypes } from "./styles";
import logo from "../../assets/pokedex.png"
import { useContext, useState } from "react";
import { PokeButton } from "../PokeButton";
import { SelectedTypeContext } from "../../context/SelectedTypeContext";

interface HeaderProps {
    onChangeInputText: (e:React.ChangeEvent<HTMLInputElement>) => void,
    inputValue: string
}

export function Header({onChangeInputText, inputValue} : HeaderProps) {
    const [queryType, setQueryType] = useState('')
    const [selected, setSelected] = useState('')
    const selectedTypeContext = useContext(SelectedTypeContext)
    
    console.log(selectedTypeContext);

    function handleOnClickTypeButton(type: string) {
        if (type === selected) {
            setSelected('')
        } else
        setSelected(type)
      }

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
                    return <PokeButton type={type} onClickTypeButton={() => handleOnClickTypeButton(type)} selected={selected} />
                })}
            </FilterTypes>
        </Container>
    )

}
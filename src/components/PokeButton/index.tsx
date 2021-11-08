import { type } from "os";
import { useState } from "react";
import { Container } from "./styles";

interface PokeButtonProps {
  type: string
}

export function PokeButton({type} : PokeButtonProps) {
  const [isSelected, setIsSelected] = useState(false)

  function handleOnClick() {
    
  }

  return(
    <Container className={type} onClick={handleOnClick} >
      {type}
      <img src={`pokeTypes/type-${type}-badge.png`} alt="" />
    </Container>
  )
}
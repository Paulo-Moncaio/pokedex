import { useState } from "react";
import { Container } from "./styles";

interface PokeButtonProps {
  type: string
  onClickTypeButton: () => void
  selected: string
}

export function PokeButton({type, onClickTypeButton, selected} : PokeButtonProps) {
  return(
    <Container className={`${type} ${selected === type ? 'selected' : ''}`} onClick={onClickTypeButton}  >
      {type}
      <img src={`pokeTypes/type-${type}-badge.png`} alt="" />
    </Container>
  )
}
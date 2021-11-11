import styled from "styled-components";

export const Container = styled.button`
  color: var(--text);
  border: 0;
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem 0.25rem ;
  text-align: center;
  display: flex;
  align-items: center;
  filter: opacity(0.5);
  transition: filter 0.2s;

  img{
    width: 1.5rem;
    margin: 0;
    padding: 0;
    padding-left: 0.25rem;
    filter: brightness(1000) ;
  }

  
  &.normal{
    background: #A8A77A;
  }
  &.fire{
    background: #EE8130;
  }
  &.water{
    background: #6390F0;
  }
  &.electric{
    background: #F7D02C;
  }
  &.grass{
    background: #7AC74C;
  }
  &.ice{
    background: #96D9D6;
  }
  &.fighting{
    background: #C22E28;
  }
  &.poison{
    background: #A33EA1;
  }
  &.ground{
    background: #E2BF65;
  }
  &.flying{
    background: #A98FF3;
  }
  &.psychic{
    background: #F95587;
  }
  &.bug{
    background: #A6B91A;
  }
  &.rock{
    background: #B6A136;
  }
  &.ghost{
    background: #735797;
  }
  &.dragon{
    background: #6F35FC;
  }
  &.dark{
    background: #705746;
  }
  &.steel{
    background: #B7B7CE;
  }
  &.fairy{
    background: #D685AD;
  }

  &.selected{
    filter: opacity(1);
  }

`;


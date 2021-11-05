import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img { 
    padding: 1rem;
    width: 400px;
  }
  input { 
    margin: 1rem;
    border: 0.1rem solid var(--grey);
    border-radius: 0.5rem;
    width: 25rem;
    height: 3rem;
    text-align: center;
    background: transparent;
    color: var(--text);
  }
`;

export const FilterTypes = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  button { 
    color: var(--text);
    border: 0;
    border-radius: 0.5rem;
    padding: 0.25rem 0.5rem;
    margin: 0.25rem 0.25rem ;

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
  }
`;
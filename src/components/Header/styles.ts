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
    border-radius: 1.5rem;
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
`;
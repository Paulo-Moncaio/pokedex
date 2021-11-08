import { GlobalStyle } from './styles/global';
import logo from './assets/pokedex.png';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { Pokecard } from './components/Pokecard';
import React, { ReactComponentElement, useState } from 'react';

interface queryParams {
  name: string,
  type1: string,
}

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Header 
        onChangeInputText={(e:React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} 
        inputValue={query}
      />
      <Dashboard name={query} />

      <GlobalStyle />
    </>
  );
}

export default App;

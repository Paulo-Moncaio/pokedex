import { GlobalStyle } from './styles/global';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { useState } from 'react';
import { SelectedTypeContext, SelectedTypeProvider } from './context/SelectedTypeContext';

interface queryParams {
  name: string,
}

function App() {
  const [query, setQuery] = useState("");

  return (
    <SelectedTypeProvider >

      <Header 
        onChangeInputText={(e:React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} 
        inputValue={query}
        />
      <Dashboard name={query} />

      <GlobalStyle />
    
    </SelectedTypeProvider>
  );
}

export default App;

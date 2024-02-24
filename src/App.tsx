import { SearchBar, Table } from '@organisms';
import { StockContext, StockProvider } from '@providers';
import './App.scss';
import { useContext } from 'react';

function App() {
  const { data } = useContext(StockContext);

  return (
    <div className="app">
      <StockProvider>
        <SearchBar label="Enter a Stock Ticker" id="searchBar" />
        <Table data={data} />
      </StockProvider>
    </div>
  );
}

export default App;

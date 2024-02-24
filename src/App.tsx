import { SearchBar, Table } from '@organisms';
import { StockContext } from '@providers';
import './App.scss';
import { useContext } from 'react';

function App() {
  const { data } = useContext(StockContext);

  return (
    <div className="app">
      <SearchBar label="Enter a Stock Ticker" id="searchBar" />
      <Table data={data} />
    </div>
  );
}

export default App;

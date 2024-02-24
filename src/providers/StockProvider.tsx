import { ChangeEvent, createContext, ReactNode, useState } from 'react';
import { IStockContext } from '@interfaces';
import { fetchStockData } from '@services';

export const StockContext = createContext<IStockContext>({
  data: [],
  search: '',
  handleChange: () => {},
  onClick: () => {},
});

export const StockProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [cache, setCache] = useState<{ [key: string]: [] }>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onClick = async () => {
    console.log('stockData', search);
    if (cache[search]) {
      console.log('cache', cache[search]);
      setData(cache[search]);
    } else {
      console.log('fetching');
      const stockData = await fetchStockData(search);
      setData(stockData);
      setCache((prevCache) => ({
        ...prevCache,
        [search]: stockData,
      }));
    }
  };

  return (
    <StockContext.Provider value={{ data, search, handleChange, onClick }}>
      {children}
    </StockContext.Provider>
  );
};

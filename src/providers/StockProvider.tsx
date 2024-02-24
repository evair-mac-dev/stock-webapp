import { ChangeEvent, createContext, ReactNode, useEffect, useState } from 'react';
import { IStockContext } from '@interfaces';

const defaultData = [
  {
    item: 'Price',
    maximum: '$100',
    minimum: '$50',
    average: '$75',
  },
  {
    item: 'Volume',
    maximum: '1000',
    minimum: '500',
    average: '700',
  },
];

export const StockContext = createContext<IStockContext>({
  data: defaultData,
  search: '',
  handleChange: () => {},
  onClick: () => {},
});

export const StockProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState(defaultData);
  const [search, setSearch] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  const onClick = () => {
    console.log(search);
  };

  useEffect(() => {
    const loadData = async () => {
      setData(defaultData);
    };

    loadData();
  }, []);

  return (
    <StockContext.Provider value={{ data, search, handleChange, onClick }}>
      {children}
    </StockContext.Provider>
  );
};

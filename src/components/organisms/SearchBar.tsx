import { Button, Input } from '@atoms';
import { FC, useContext } from 'react';
import { ISearchBar } from '@interfaces';
import { StockContext } from '@providers';

export const SearchBar: FC<ISearchBar> = (props) => {
  const { id, label } = props;
  const { search, handleChange, onClick } = useContext(StockContext);

  return (
    <div className="searchBar">
      <label htmlFor={id}>{label}</label>
      <Input type="text" name="search" value={search} id={id} onChange={handleChange} />
      <Button onClick={onClick}>Search</Button>
    </div>
  );
};

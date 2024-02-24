import { Button, Input } from '@atoms';
import { ChangeEvent, FC, useState } from 'react';
import { ISearchBar } from '@interfaces';

export const SearchBar: FC<ISearchBar> = (props) => {
  const { id, label } = props;
  const [search, setSearch] = useState('');

  const onClick = () => {
    console.log(search);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <div className="searchBar">
      <label htmlFor={id}>{label}</label>
      <Input type="text" name="search" value={search} id={id} onChange={handleChange} />
      <Button onClick={onClick}>Search</Button>
    </div>
  );
};

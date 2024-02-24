import { FC } from 'react';
import { IRow } from '@interfaces';
import { Cell } from '@atoms';

export const Row: FC<IRow> = (props) => {
  const { rowData, background } = props;
  return (
    <div className={`row ${background ? background : 'rowBackground'}`}>
      {Object.entries(rowData).map(([key, value]) => {
        return <Cell key={key}>{value}</Cell>;
      })}
    </div>
  );
};

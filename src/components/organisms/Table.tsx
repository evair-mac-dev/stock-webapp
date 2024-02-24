import { FC } from 'react';
import { ITable } from '@interfaces';
import { Row } from '@molecules';
import { capitalize } from '@utils';

export const Table: FC<ITable> = (props) => {
  const { data } = props;
  const header = Object.keys(data[0]).map((val) => capitalize(val));
  const emptyRow = header.map(() => '');

  return (
    <div className="table">
      <Row rowData={header} key="header" background="rowHeaderBackground" />
      {data.map((row, index) => (
        <Row rowData={row} key={index} background={index % 2 === 0 ? 'rowSandBackground' : ''} />
      ))}
      <Row rowData={emptyRow} key="footer" background="rowSandBackground" />
    </div>
  );
};

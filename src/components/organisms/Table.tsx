import { FC } from 'react';
import { ITable } from '@interfaces';
import { capitalize } from '@utils';
import { Row } from '@molecules';

export const Table: FC<ITable> = (props) => {
  const { data } = props;
  console.log('data', data);
  if (data.length === 0) {
    return <div className="noData">No data available</div>;
  }

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

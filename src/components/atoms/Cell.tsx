import { FC } from 'react';
import { ICell } from '@interfaces';

export const Cell: FC<ICell> = (props) => {
  const { children } = props;

  return <div className="cell">{children}</div>;
};

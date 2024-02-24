import { ReactNode } from 'react';

export interface IRowData {
  item: string;
  maximum: string;
  minimum: string;
  average: string;
}

export interface ICell {
  children: ReactNode;
}

export interface IRow {
  rowData: IRowData | string[];
  background?: string;
}

export interface ITable {
  data: IRowData[];
}

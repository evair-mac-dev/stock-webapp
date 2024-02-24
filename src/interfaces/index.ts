import { ChangeEvent, ReactNode } from 'react';

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

export interface IButton {
  children: ReactNode;
  onClick: () => void;
}

export interface IInput {
  id: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ISearchBar {
  id: string;
  label: string;
}

export interface IStockContext {
  data: IRowData[];
  search: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

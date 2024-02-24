import { FC } from 'react';
import { IButton } from '@interfaces';

export const Button: FC<IButton> = (props) => {
  const { children, onClick } = props;
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

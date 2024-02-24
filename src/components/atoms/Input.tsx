import { IInput } from '@interfaces';
import { FC } from 'react';

export const Input: FC<IInput> = (props) => {
  const { value, name, type, onChange } = props;
  return (
    <div className="input">
      <input type={type} value={value} name={name} onChange={onChange} />
    </div>
  );
};

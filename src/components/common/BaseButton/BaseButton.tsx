import { Button, ButtonTypeMap } from '@mui/material';

interface IBaseButtonProps extends ButtonTypeMap {
  text: string;
}

export const BaseButton = ({ text }: IBaseButtonProps) => {
  return <Button>{text}</Button>;
};

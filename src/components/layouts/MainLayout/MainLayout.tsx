import { ReactNode } from 'react';

interface IMainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: IMainLayoutProps) => {
  return <div>{children}</div>;
};

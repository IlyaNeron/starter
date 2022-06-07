import React, { FC, ReactNode } from 'react'

interface IMainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return <div>{children}</div>
}

export default MainLayout

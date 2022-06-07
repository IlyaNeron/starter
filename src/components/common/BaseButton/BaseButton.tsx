import { Button, ButtonTypeMap } from '@mui/material'
import React, { FC } from 'react'

interface IBaseButtonProps extends ButtonTypeMap {
  text: string
}

const BaseButton: FC<IBaseButtonProps> = ({ text }) => {
  return <Button>{text}</Button>
}

export default BaseButton

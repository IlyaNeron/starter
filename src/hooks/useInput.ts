import { ChangeEvent, useState } from 'react'

type TInputValue = string | number

export const useInput = (initialValue: TInputValue) => {
  const [value, setValue] = useState<TInputValue>(initialValue)

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return [value, handler, setValue]
}

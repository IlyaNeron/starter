import { ChangeEvent, useState } from 'react'

// TODO: do we need TUseInputValue here?
//  useState sees initialValue types without explicit declaration on line 9

type TUseInputValue = string | number

export const useInput = (initialValue: TUseInputValue) => {
  const [value, setValue] = useState<TUseInputValue>(initialValue)

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return [value, handler, setValue]
}

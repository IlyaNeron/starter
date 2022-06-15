# Contribution guideline

## Project structure

### index.ts file

`index.ts` should represent and entry point to an entity whether it is a component, a page, a
service, or anything else. The content of `index.ts` should be only what consumers want to import
from this entity (aka the API).

Example:

We have an abstract component with the next folder/file structure

```
- AbstractComponent
  - __tests__
  - components
    - index.ts
    - SubComponent1
    - SubComponent2
    - SubComponent3
  - index.ts
  - AbstractComponent.ts
  - types.ts
  - constants.ts
  - helpers.ts
```

In this example this AbstractComponent provides two parts to its consumers:

- itself
- some of its types
- its SubComponent2

In this case the content of `index.ts` file will be

```javascript
export { AbstractComponent } from './AbstractComponent'
export { Props as AbstractComponentProps, SomeInterface } from './types'
export { SubComponent2 } from './components'
```

There is another `index.ts` file present in `./components` folder. That `index.ts` content is

```javascript
export { SubComponent1 } from './SubComponent1'
export { SubComponent2 } from './SubComponent2'
export { SubComponent3 } from './SubComponent3'
```

That `./components/index.ts` file is not an entry point to an entity but is used just for comfort.
There is a small chance that `AbstractComponent` will not use something from its `./components`
folder. The difference `./components/index.ts` file provides will be visible in the
AbstractComponent.ts file:

```javascript
// without ./components/index.ts
import { SubComponent1 } from './components/SubComponent1'
import { SubComponent2 } from './components/SubComponent2'
import { SubComponent3 } from './components/SubComponent3'

// with ./components/index.ts
import { SubComponent1, SubComponent2, SubComponent3 } from './components'
```

### _**[REQUIRES DISCUSSION]**_

- Files roles, names and overall file structure.
- Tests placement.

## Imports / exports

### Importing React itself

Don't import React in every single file. It can be imported once at the very start of the
application which is usually can be found at `{project_root}/src/index.ts`.

### No export default

Avoid using `export default` as much as possible. Use named `export/import` instead.

Known exceptions:

- `export default` for `React.lazy`.

### Relative vs absolute imports

Use absolute path for importing anything outside the folder where the consumer file is located.

For example the consumer file is located at `{project_root}/src/pages/public/HomePage` and you want
to import a button component.
So instead of writing `import { Button } from "../../../components/common/Button"`
you should write `import { Button } from "components/common/Button"` (no `src`).

Avoid using absolute path when you are importing from the same folder where the consumer file is
located. Use relative path instead.

For example the consumer file is located at `{project_root}/src/pages/Public/HomePage` and you want
to import a subcomponent that is located in the same folder.
So instead of writing `import { ComponentName } from "pages/Public/HomePage/ComponentName"`
you should write `import { ComponentName } from "./ComponentName"`.

### Import order

- All imports should be grouped into three groups:
  - 3rd-party imports (aka package.json dependencies)
  - absolute imports
  - relative imports
- Groups should be separated using an empty line.
- Imported items in a single named import should be sorted alphabetically.

Example:

```javascript
import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

import { Button } from 'components/common/Button'
import { Input } from 'components/common/Input'

import { Props, State } from './types'
import styles from './Component.module.scss'
```

## Typescript

### General

- Use https://github.com/typescript-cheatsheets/react as a general reference
- No implicit `any` at all
- Avoid using explicit `any` unless there is a good reason for it

### Function Components

Avoid explicitly specifying component and/or component return types

```typescript
type Props = {
  message: string
}

// Write
const Component1 = (props: Props) => {}
const Component2 = (props: { message: string }) => {}

// Avoid writing
const Component3: React.FC<Props> = (props) => {}
```

### _**[REQUIRES DISCUSSION]**_ Primitive explicit types

```typescript
const testString1 = 'random sting'
// vs
const testString2: string = 'random sting'
```

### Other

- _**[REQUIRES DISCUSSION]**_ useInput example
- _**[REQUIRES DISCUSSION]**_ `type` vs `interface`
- _**[REQUIRES DISCUSSION]**_ `type` and `interface` naming convention

## CSS

### General

- Use Material UI theme as much as possible
- Avoid using `!important` as much as possible.

### Custom styles

Material UI styling engine uses `@emotion` by default. In case there is a need in custom styling,
and it can not be done using Material UI theme, use `@emotion`.

## Tests

### General

- Use `expectSaga` over `testSaga` as much as possible.
- _**[REQUIRES DISCUSSION]**_ Button.jestTestId = 'button'
- _**[REQUIRES DISCUSSION]**_ test structure (describe, test vs it, etc.)

## Dependencies management

- Do not use `^` symbol in dependency version.
- Each dependency update pull request should update one dependency at a time.
- _**[REQUIRES DISCUSSION]**_ Dependency update schedule.

Hint: `node-check-updates` library can be used to check if there are newer dependency versions
available.

## Working with GIT

_**[REQUIRES DISCUSSION]**_

### Pull requests

- Development branch should be first updated with the latest main/master branch before merging.
- Development branch should be squashed and merged into main/master branch.
- After merging development branch into main/master branch the development branch should be deleted.
A new branch with the same name can be created if needed.

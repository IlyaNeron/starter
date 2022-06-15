# Contribution guideline

## Project structure

### index.ts file

`index.ts` should represent and entry point to an entity whether it is a component, a page, a
service, or anything else. The content of `index.ts` should be only what consumers want to import
from this entity (aka the API).

Example:

We have an abstract component with the next folders/files structure

```
AbstractComponent
    __tests__
    components
        index.ts
        SubComponent1
        SubComponent2
        SubComponent3
    index.ts
    AbstractComponent.tsx
    types.ts
    constants.ts
    helpers.ts
```

In the example above this AbstractComponent provides next things to its consumers:

- itself
- some of its types
- its SubComponent2

In this case the content of `index.ts` file will be

```typescript
export { AbstractComponent } from './AbstractComponent';
export { Props as AbstractComponentProps, SomeInterface } from './types';
export { SubComponent2 } from './components';
```

There is another `index.ts` file present in `./components` folder. That `index.ts` content is

```typescript
export { SubComponent1 } from './SubComponent1';
export { SubComponent2 } from './SubComponent2';
export { SubComponent3 } from './SubComponent3';
```

That `./components/index.ts` file is not an entry point to an entity but is used just for comfort.
There is a small chance that `AbstractComponent` will not use something from its `./components`
folder. The difference `./components/index.ts` file provides will be visible in the
AbstractComponent.ts file:

```typescript
// without ./components/index.ts
import { SubComponent1 } from './components/SubComponent1';
import { SubComponent2 } from './components/SubComponent2';
import { SubComponent3 } from './components/SubComponent3';

// with ./components/index.ts
import { SubComponent1, SubComponent2, SubComponent3 } from './components';
```

### Files roles, names and placement

`index.ts` is an entry point to an entity.

Entity file should be named the same as the entity itself. For example:

- `BaseButton.tsx` for `BaseButton` component
- `PageTitle.tsx` for `PageTitle` component
- `NavigationService.ts` for `NavigationService` service

If an entity has its own smaller components they should be placed within `./components` folder.

If an entity has types they should be placed either in the entity main file or in the separate
`./types.ts` file in the same folder depending on how many types that entity has. If one small
definition then it can be placed inside the entity main file, otherwise in a separate file.

```typescript jsx
// Button.tsx with one small type definition
import { Button, ButtonTypeMap } from '@mui/material';

interface IBaseButtonProps extends ButtonTypeMap {
  text: string;
}

export const BaseButton1 = ({ text }: IBaseButtonProps) => {
  return <Button>{text}</Button>;
};

// Button.tsx with big or many types definitions
import { Button, ButtonTypeMap } from '@mui/material';

import { IBaseButtonProps, IBaseButtonOtherType } from './types';

export const BaseButton2 = ({ text }: IBaseButtonProps) => {
  return <Button>{text}</Button>;
};

// types.ts
import { Button, ButtonTypeMap } from '@mui/material';

export interface IBaseButtonProps extends ButtonTypeMap {
  text: string;
  color: 'primay' | 'secondary' | 'link';
  customProp1: any;
  customProp2: any;
}

export interface IBaseButtonOtherType {
  type1: any;
  type2: any;
  type3: any;
}
```

Same rules apply to constants, helpers and everything that can be moved outside the entity main
file to improve its structure and readability.

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

```typescript
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { Button } from 'components/common/Button';
import { Input } from 'components/common/Input';

import { Props, State } from './types';
import styles from './Component.module.scss';
```

Import order will be forced by `eslint-plugin-import` library.

## Typescript

### General

- Use [TypeScript React cheatsheets](https://github.com/typescript-cheatsheets/react) as a general
  reference
- No implicit `any` at all
- Avoid using explicit `any` unless there is a good reason for it
- Plave global types and/or generics in `{project_root}/src/types` folder

### Function Components

Avoid explicitly specifying component type and/or component return type

```typescript jsx
type Props = {
  message: string;
};

// Write
const Component1 = (props: Props) => {};
const Component2 = (props: { message: string }) => {};

// Avoid writing
const Component3: React.FC<Props> = props => {};
const Component4 = (props: Props): JSX.Element => {};
```

### Primitive types

Take advantage of TypeScript implicit typing as much as possible. You can still use explicit typing
where it makes sense (for example for readability).

```typescript
// Write
const testString1 = 'random sting';

// Avoid writing
const testString2: string = 'random sting';
```

### Interface vs Type

- Use `Interface` as much as possible. Use `Type` only if needed.
- All interface names should start with `I` and all type names should start with `T`

```typescript
interface IMyCustomInterface {}
type TMyCustomType = {};
```

## CSS

### General

- Use Material UI theme as much as possible
- Avoid using `!important` as much as possible.

### Custom styles

Material UI styling engine uses `@emotion` by default. In case there is a need in custom styling,
and it can not be done using Material UI theme, use `@emotion`.

## Tests

### General

Test files should be named the same way as the files they test plus `test` word.
Examples:

- BaseButton.tsx -> BaseButton.test.tsx
- PageTitle.tsx -> PageTitle.test.tsx
- helpers.tsx -> helpers.test.tsx
- utils.tsx -> utils.test.tsx

If a folder contains a single file that should be tested, then place its test file alongside in the
same folder on the same level.

```
BaseButton
    index.ts
    BaseButton.tsx
    BaseButton.test.tsx
    types.ts
```

If a folder contains multiple files that should be tested, then place their tests in the `__test__`
folder on the same level.

```
Page
  __tests__
      Page.test.tsx
      PageTitle.test.tsx
      PageContainer.test.tsx
  index.ts
  Page.tsx
  PageTitle.tsx
  PageContainer.tsx
```

Test file should always have at least one `describe` at the top level. Use `it` instead of `test`.
There should be no `it` outside of `describe`. Use `it.skip` or `describe.skip` to opt out specific
`it` or `describe` from being executed instead of commenting it.

`describe` should say what entity is being tested. `it` should say what that entity should or
shouldn't do.
Example:

```typescript
// BaseButton.test.tsx
describe('"BaseButton" common component', () => {
  it('should render without crashing', () => {
    //
  });
});
```

All `beforeEach`, `afterEach`, `beforeAll`, `afterAll` should be placed at the top of their
respective `describe`.

You can nest `describes` if needed.

In case your test requires finding an element on the page consider doing it using `screen.getByTestId()`
function. It accepts a string which should be passed to a `data-testid` attribute for that element.
Store that test id string as a static property in the tested component itself like so:

```typescript jsx
// BaseButton.tsx
export const BaseButton = ({ children, ...buttonProps }: IBaseButtonProps) => {
  return (
    <button type='button' data-testid={BaseButton._jestTestId} {...buttonProps}>
      {children}
    </button>
  );
};

BaseButton._jestTestId = 'base-button';

// BaseButton.test.tsx
describe('"BaseButton" common component', () => {
  it('should render without crashing', () => {
    render(<BaseButton>MyBaseButton</BaseButton>);

    const button = screen.getByTestId(BaseButton._jestTestId);
    expect(button).toBeInTheDocument();
  });
});
```

**IMPORTANT**: Make sure that `data-testid` can be overwritten by the component consumer.

### Sagas

- Use `expectSaga` over `testSaga` as much as possible.
- **[TODO]** Add links to both examples.

## Dependencies management

- Do not use `^` symbol in dependency version.
- Each dependency update pull request should update one dependency at a time.

Minor or patch updates that don't require refactoring or development work and don't introduce
any breaking changes that can affect the project can go without a Jira ticket.

Any major update or an update that requires any refactoring or development work should have its own
Jira ticket.

Hint: `node-check-updates` library can be used to check if there are newer dependency versions
available.

## Working with GIT

### Branching

Branch name should obey the next pattern `{type}/{Jira ticket number}/{short name}`.
Examples:

- feature/SMPFM-9/contribution-guideline-test-practices
- bugfix/SMPFM-10/confirmation-modal-not-opening
- improvement/SMPFM-11/refactor-main-http-saga
- dependency/SMPFM-12/update-react-router-to-v7.0.1
- dependency/update-@types-node-to-v17.0.43

Some branches might not have their own Jira ticket. For example dependency update if this is a
minor or patch update that does not require additional code refactoring.

### Pull requests

- Development branch should be first updated with the latest main/master branch before merging.
- Development branch should be squashed and merged into main/master branch.
- After merging development branch into main/master branch the development branch should be deleted.
  A new branch with the same name can be created if needed.

Pull request name should short and contain Jira ticket number.
Example: `Story [SMPFM-9]`

Pull request description should obey next pattern:

1st line: `{type} [Jira ticket number] Jira ticket title`
2nd line: `{Link to the Jira ticket}`

Example:

```
Sub-task [SMPFM-9]

Sub-task [SMPFM-9] Add to contribution guideline test practices
https://jira.panasonicfa.com/browse/SMPFM-9
```

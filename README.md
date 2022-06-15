# Load data section

### Redux based approach (global store):

General rules could be found [here](https://redux-saga.js.org/docs/introduction/GettingStarted)
As approach of resolving redux and saga could be found [here](https://github.com/reduxjs/redux-toolkit/blob/master/docs/api/createSlice.mdx)
To be able to interact with store with our components we will need:
- use useSelector in component
- add appropriate watchers (they always come first) and workers in [saga.ts](https://github.com/IlyaNeron/starter/blob/main/src/store/app/saga.ts)
- make changes in [slice.ts](https://github.com/IlyaNeron/starter/blob/main/src/store/app/slice.ts)

### Network

Network layer incapsulated under `src/services/api`. `axios` used as an http client.

Sub-structure:
- `src/services/api/api` - configured common http client
- `src/services/api/interceptors` - interceptors attached to common http client
- `src/services/api/app/*` - domain resources, every file represent own rest resource (e.g. location, assets, etc.)

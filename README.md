# Load data section

### Redux based approach (global store):

General rules could be found [here](https://redux-saga.js.org/docs/introduction/GettingStarted)

?? Initially we want to create start, success, failed actions but for now we don't know the redux structure

### react-query (local state):

More about how to use react-query and example is [here](https://react-query.tanstack.com/overview).

- Import useQuery, useQueryClient
- instantiate useQueryClient()
- use useQuery hook with params you [need](https://react-query.tanstack.com/guides/queries). First param should go the unique key for the query,
  suggestion is to create file with enums where should be stored the names of the queries. Second parameter is a function that returns a promise that resolves the data, or
  throws an error

### Network

Network layer incapsulated under `src/services/api`. `axios` used as an http client.

Sub-structure:
- `src/services/api/api` - configured common http client
- `src/services/api/interceptors` - interceptors attached to common http client
- `src/services/api/app/*` - domain resources, every file represent own rest resource (e.g. location, assets, etc.)

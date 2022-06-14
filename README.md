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

### Network layer

- Library [axios](https://axios-http.com/docs/intro)
- General axios [instance](https://github.com/IlyaNeron/starter/blob/main/src/services/api/api.ts)
- Axios [interceptors](https://github.com/IlyaNeron/starter/blob/main/src/services/api/interceptor.ts)
- Axios usage [example](https://github.com/IlyaNeron/starter/blob/main/src/services/api/app/postApi.ts)

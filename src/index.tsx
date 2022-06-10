import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'

import './services/localization/i18n'
import { createStore } from './store/store'
import { App } from './App'

const container = document.getElementById('root')!
const root = createRoot(container)
const store = createStore()
const queryClient = new QueryClient()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)

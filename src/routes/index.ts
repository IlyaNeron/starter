import { lazy } from 'react'
//
const Home = lazy(() => import('../pages/Home'))
const NoMatch = lazy(() => import('../pages/NoMatch'))

export const HOME = {
  component: Home,
  path: 'home',
}

export const NO_MATCH = {
  component: NoMatch,
  path: '*',
}

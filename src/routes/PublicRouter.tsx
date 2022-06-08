import { Routes, Route } from 'react-router-dom'
import { HOME, NO_MATCH } from './'

export const PublicRouter = () => {
  return (
    <Routes>
      <Route index element={<HOME.component />} />
      <Route path={HOME.path} element={<HOME.component />} />
      <Route path={NO_MATCH.path} element={<NO_MATCH.component />} />
    </Routes>
  )
}

import { Routes, Route } from 'react-router-dom';

import * as ROUTES from './routes';

export const PublicRouter = () => {
  return (
    <Routes>
      <Route index element={<ROUTES.HOME.component />} />
      <Route path={ROUTES.HOME.path} element={<ROUTES.HOME.component />} />
      <Route path={ROUTES.NO_MATCH.path} element={<ROUTES.NO_MATCH.component />} />
    </Routes>
  );
};

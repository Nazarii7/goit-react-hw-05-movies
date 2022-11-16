import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<div>Home</div>} />
        </Route>
      </Routes>
    </>
  );
};

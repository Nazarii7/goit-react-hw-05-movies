import { Routes, Route } from 'react-router-dom';
import SharedLayout from './Layout/SharedLayout';
import { lazy } from 'react';

const Movies = lazy(() => import('./Pages/Movie'));
const Home = lazy(() => import('./Pages/Home'));
const MovieDetail = lazy(() => import('./MovieDetails/MovieDetails'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieID" element={<MovieDetail />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

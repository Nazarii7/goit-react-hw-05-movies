import { Routes, Route } from 'react-router-dom';
import SharedLayout from './Layout/Layout';

import Movies from './Pages/Movie';
import Home from './Pages/Home';
import MovieDetail from './MovieDetails/MovieDetails';
import MovieCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';
import NotFound from './NotFound/NotFound';

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

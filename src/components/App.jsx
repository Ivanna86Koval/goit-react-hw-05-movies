import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout';
// import { Movies } from 'pages/Movies';
// import { MovieDetails } from 'pages/MovieDetails';
// import { MovieCast } from 'pages/MovieCast';
// import { MovieReviews } from 'pages/MovieReviews';

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const MovieCast = lazy(() => import('../pages/MovieCast'));
const MovieReviews = lazy(() => import('../pages/MovieReviews'));
const Movies = lazy(() => import('../pages/Movies'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

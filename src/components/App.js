import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import {SharedLayout} from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home.js'));
const Movie = lazy(() => import('../pages/Movie/Movie.js'))
/*const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const MovieCast = lazy(() => import('../pages/MovieCast'));
const MovieReviews = lazy(() => import('../pages/MovieReviews'));
*/



export const App = () => {
  return (
    <Routes>
        <Route path="/" element= {<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element= {<Movie />} />
         </Route>
         </Routes>
  );
};


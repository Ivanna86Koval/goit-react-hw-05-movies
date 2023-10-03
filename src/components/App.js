import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout';
import {
  Header,
  ListMenu,
  ListMenuItem,
  ListMenuItemLink,
} from './Header/Header.styled.js';
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
    <div>
    <Header>
      <ListMenu>
        <ListMenuItem>
          <ListMenuItemLink to="/">Home</ListMenuItemLink>
        </ListMenuItem>
        <ListMenuItem>
          <ListMenuItemLink to="/films">Films</ListMenuItemLink>
        </ListMenuItem>
      </ListMenu>
    </Header>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

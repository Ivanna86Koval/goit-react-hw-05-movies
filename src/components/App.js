import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import {
  Header,
  ListMenu,
  ListMenuItem,
  ListMenuItemLink,
} from './Header/Header.styled.js';

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
          <ListMenuItemLink to="/movies">Movies</ListMenuItemLink>
        </ListMenuItem>
      </ListMenu>
    </Header>
       <Routes>
        <Route path="/" element={<Home />}>
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

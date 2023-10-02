import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
//import { GlobalStyle } from './GlobalStyle';
import {SharedLayout} from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home.js'));
const Movie = lazy(() => import('../pages/Movie/Movie.js'))



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


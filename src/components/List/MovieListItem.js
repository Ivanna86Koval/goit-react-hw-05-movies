import React from 'react';
import { Link } from 'react-router-dom';

export const MovieListItem = ({ location, movie }) => {
  return (
    <li className="w-fit">
      <Link state={{ from: location }} to={`/movies/${movie.id}`}>
        <img
          loading="lazy"
          className="w-[200px] h-[300px]"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
              : 'https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png'
          }
          alt=""
        />
      </Link>

      <p className="w-[200px]">{movie.title || movie.name}</p>
    </li>
  );
};

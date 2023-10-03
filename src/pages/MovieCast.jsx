import { fetchMovieCastById } from 'service/TheMovie-api';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      const data = await fetchMovieCastById(movieId);
      setActors(data.cast.slice(0, 15));
    }
    fetchCast();
  }, [movieId]);

  return (
    <section>
      <ul className="grid grid-cols-5 gap-y-3 pt-2">
        {actors.map(actor => {
          return (
            <li key={actor.id} className="w-[200px]">
              <img
                className="h-[300px] object-cover"
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
                    : 'https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png'
                }
                alt=""
              />
              <p>
                {actor.name === 'Ryan Gosling'
                  ? `In deep dark fantasies: ${actor.name}`
                  : actor.name}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MovieCast;

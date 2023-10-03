import { fetchMovieReviewsById } from 'service/TheMovie-api';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      const data = await fetchMovieReviewsById(movieId);
      setReviews(data.results);
    }
    fetchCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section>
      <ul className="flex flex-col gap-y-4 pt-2">
        {reviews.length ? (
          reviews.map(review => (
            <li key={review.id}>
              <h4 className="font-bold mb-2">{review.author}:</h4>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p className="font-bold">There are no reviews currently</p>
        )}
      </ul>
    </section>
  );
};

export default MovieReviews;

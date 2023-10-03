import { Container } from 'components/Container';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MovieListItem } from './MovieListItem';
import { fetchLatestMovies, fetchMoviesByQuery } from 'service/TheMovie-api';
import { useLocation, useSearchParams } from 'react-router-dom';

export const MovieList = ({ listType }) => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        if (listType === 'search') {
          if (!searchParams.get('query')) {
            setMovies([]);
            return;
          }
          if (searchParams.get('query') !== query) {
            setMovies([]);
          }
          const { results, total_pages } = await fetchMoviesByQuery(
            searchParams.get('query'),
            page,
            controller
          );
          if (!results.length) {
            setMessage('No movies found. Please try another name');
            return;
          }
          setTotalPages(total_pages);
          setMovies(prev => [...prev, ...results]);
          setQuery(searchParams.get('query'));
        } else if (listType === 'trending') {
          const { results, total_pages } = await fetchLatestMovies(
            page,
            controller
          );

          setTotalPages(total_pages);
          setMovies(prev => [...prev, ...results]);
        } else {
          throw new Error('Unknown type of list');
        }
      } catch (error) {
        if (error.code === 'ERR_CANCELED') {
          return;
        }
      }
    }
    fetchMovies();

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listType, page, searchParams]);

  return (
    <Container>
      {movies.length ? (
        <InfiniteScroll
          dataLength={movies.length} //This is important field to render the next data
          next={() => {
            if (totalPages === page) {
              setHasMore(false);
              return;
            }
            setPage(page + 1);
          }}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          className="list-none grid grid-cols-6 gap-y-3"
        >
          {movies.map(movie => {
            return (
              <MovieListItem key={movie.id} location={location} movie={movie} />
            );
          })}
        </InfiniteScroll>
      ) : (
        `${message}`
      )}
    </Container>
  );
};

import { Container } from 'components/Container';
import { useSearchParams } from 'react-router-dom';
import React from 'react';

import { MovieList } from 'components/List/MovieList';

const Movies = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Container>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          setSearchParams({
            query: evt.currentTarget.elements.query.value.trim(),
          });
        }}
      >
        <input
          name="query"
          className="border-[black] border-[1px] p-1 rounded-md"
          type="text"
          placeholder="Enter movie name"
        />
        <button
          type="submit"
          className="ml-3  px-2 py-2 rounded-md hover:bg-[orange] hover:text-[#fff]"
        >
          Search
        </button>
      </form>
      <MovieList listType="search" />
    </Container>
  );
};

export default Movies;

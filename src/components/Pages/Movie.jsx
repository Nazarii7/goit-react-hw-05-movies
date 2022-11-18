import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'Api';
import { NavLink, useLocation } from 'react-router-dom';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams(query !== '' ? { query: form.elements.query.value } : {});
    form.reset();
  };

  useEffect(() => {
    if (query === '' || query === null) {
      fetchMovies(query).then(setMovies);
    }
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>

      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movie;

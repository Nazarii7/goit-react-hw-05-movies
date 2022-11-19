import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'Api';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ButtonBack } from './Movie.styled';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();
  const navigate = useNavigate();

  const goBackHome = () => navigate('/');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams(query !== '' ? { query: form.elements.query.value } : {});
    form.reset();
  };

  useEffect(() => {
    if (query === '' || query === null) return;
    fetchMovies(query).then(setMovies);
  }, [query]);

  return (
    <>
      <ButtonBack onClick={goBackHome}>Back to Home</ButtonBack>
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

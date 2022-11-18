import { fetchTrendingMovie } from 'Api';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovie().then(setMovies);
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

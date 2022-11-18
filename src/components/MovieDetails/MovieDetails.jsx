import { fetchSearchMovies } from 'Api';
import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetchSearchMovies(movieID).then(setMovie);
  }, [movieID]);

  if (!movie) {
    return;
  }

  const {
    title,
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  return (
    <>
      <div>
        <button onClick={goBack}>Go Back</button>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={original_title}
            width="200px"
          />
        </div>
        <div>
          <h2>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <p>Rating: {vote_average.toFixed(2)}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <p to={'cast'}>Cast</p>
          </li>
          <li>
            <p to={'reviews'}>Reviews</p>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetail;

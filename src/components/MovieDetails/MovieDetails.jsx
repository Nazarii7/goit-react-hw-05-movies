import { fetchSearchMovies } from 'Api';
import { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import {
  ButtonBack,
  MovieInfoWrap,
  MovieInfo,
  AddInfo,
  List,
  Link,
} from './MovieDetails.styled';

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();
  const location = useLocation();

  const backLinkRef = useRef(location.state?.from ?? '/');

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
    <main>
      <ButtonBack to={backLinkRef.current}>Back to movies</ButtonBack>
      <MovieInfoWrap>
        <div>
          <img
            style={{ marginRight: 20 }}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={original_title}
            width="200px"
          />
        </div>
        <MovieInfo>
          <h2>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <p>Rating: {vote_average.toFixed(2)}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
        </MovieInfo>
      </MovieInfoWrap>
      <AddInfo>
        <p>Additional iformation</p>
        <List>
          <li>
            <Link to={'cast'} style={{ marginRight: 20 }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </List>
      </AddInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetail;

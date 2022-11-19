import { fetchMovieCast } from 'Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastListWrapper } from './MovieCast.styled';

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    fetchMovieCast(movieID).then(setMovieCast);
  }, [movieID]);

  if (!movieCast) {
    return;
  }

  return (
    <CastListWrapper>
      <CastList>
        {movieCast.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : `https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png`
              }
              alt={actor.original_name}
              width="100px"
              height="150px"
            />
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </CastList>
    </CastListWrapper>
  );
};

export default MovieCast;

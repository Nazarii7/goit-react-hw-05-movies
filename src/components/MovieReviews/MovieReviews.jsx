import { fetchMovieReviews } from 'Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieID).then(setMovieReviews);
  }, [movieID]);

  if (!movieReviews) {
    return;
  }

  return (
    <div>
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        "We don't have any reviews for this movie"
      )}
    </div>
  );
};

export default MovieReviews;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovies } from '../../services/api';
import './index.css';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    try {
      const data = await getPopularMovies();
      setPopularMovies(data.results);
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };

  return (
    <div className="page">
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {popularMovies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Link to={`/movie/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </Link>
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

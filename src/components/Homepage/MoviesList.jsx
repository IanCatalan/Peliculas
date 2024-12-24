import MovieCard from "./MovieCard";
import styles from "./styles/MovieList.module.css";

const MoviesList = ({ movies = { results: [] } }) => {
  return (
    <div className={styles.container}>
      {movies.results.length > 0 ? (
        movies.results.map((movieInfo) => (
          <MovieCard key={movieInfo.id} movie={movieInfo} />
        ))
      ) : (
        <p className={styles.empty}>No hay películas disponibles.</p>
      )}
    </div>
  );
};

export default MoviesList;

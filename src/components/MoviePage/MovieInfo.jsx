import styles from "./styles/MovieInfo.module.css";

const MovieInfo = ({ movie }) => {
  const year = new Date(movie?.release_date).getFullYear();

  const styleSection = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
  };

  return (
    <div className={styles.movie_container} style={styleSection}>
      <section className={styles.movie}>
        <header className={styles.img_container}>
          <img
            className={styles.image}
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt={`Poster ${movie?.title}`}
          />
        </header>
        <article className={styles.body}>
          <h2 className={styles.title}>
            {movie?.title} <span>({year})</span>
          </h2>
          <ul className={styles.list_genres}>
            {movie?.genres.map((genreInfo) => (
              <li className={styles.genre} key={genreInfo.id}>
                {genreInfo.name}
              </li>
            ))}
          </ul>
          <h3 className={styles.duration}>
            {Math.floor(movie?.runtime / 60)}h {movie?.runtime % 60}m
          </h3>
          <section className={styles.description_container}>
            <h4 className={styles.description_title}>Descripción General</h4>
            <p className={styles.description}>{movie?.overview}</p>
          </section>
          <footer className={styles.footer}>
            <div className={styles.star}>⭐️</div>
            <h4 className={styles.vote}>{movie?.vote_average}</h4>
            <div className={styles.vote_count}>({movie?.vote_count})</div>
          </footer>
        </article>
      </section>
    </div>
  );
};

export default MovieInfo;

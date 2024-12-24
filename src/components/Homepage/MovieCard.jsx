import axios from "axios";
import { useEffect, useState } from "react"
import styles from "./styles/MovieCard.module.css"
import { useNavigate } from "react-router";

const MovieCard = ({movie}) => {
    const [genres, setGenres] = useState()
    useEffect(() => {
        const options = {
            params: {
                language: 'es-MX',
            },
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGY4MTZlNzkwOTNkZjVkMmE5MWQwYTVmNmRmMTAyNSIsIm5iZiI6MTczMzIzMTMxNC45MDgsInN1YiI6IjY3NGYwMmQyMTIyMmFkYmI2M2RmMTkwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ORuko-zAsuNPvUihUsUAb_HSBepY9G-xodamfFCenOM'
            }
          };
          const url ='https://api.themoviedb.org/3/genre/movie/list'
          axios.get(url, options)
            .then(res => setGenres(res.data))
            .catch(err => console.error(err));
}, [])
    
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/pelicula/${movie.id}`)
    }
  return (
    <article onClick={handleClick} className={styles.card}>
        <header className={styles.header}>
            <img className={styles.image} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Poster" />
        </header>
        <section className={styles.body}>
            <h3 className={styles.title}>{movie.title}</h3>
            <ul className={styles.list}>
            {
                movie.genre_ids.map(genreId =>(
                    <li className={styles.genre} key={genreId}>
                        {genres?.genres.find(e=>e.id === genreId).name}
                    </li>
                ))
            }
            </ul>
        </section>
    </article>
  )
}
export default MovieCard
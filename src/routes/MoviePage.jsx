import { useNavigate, useParams } from "react-router"
import MovieInfo from "../components/MoviePage/MovieInfo"
import axios from "axios"
import { useEffect, useState } from "react"
import CastSection from "../components/MoviePage/CastSection"
import styles from "./styles/MoviePage.module.css"

const MoviePage = () => {
    const [movie, setMovie] = useState()
    const {id} = useParams()
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
          axios.get(url, options)
          .then(res => setMovie(res.data))
          .catch(err => console.log(err))
    }, [id])
    
    const url = `https://api.themoviedb.org/3/movie/${id}`
    const navigate = useNavigate
    const handleClick = () => {
      navigate ('/')
    }
  return (
    <div>
      <button onClick={handleClick} className={styles.btn}>◀</button>
    <MovieInfo 
    movie = {movie}
    />
    <CastSection
    movieId = {movie?.id}
    />
    </div>
  )
}
export default MoviePage

import axios from "axios";
import { useEffect, useState } from "react";
import styles from './styles/CastSection.module.css'
import CastCard from "./CastCard";

const CastSection = ({ movieId }) => {
  const [credits, setCredits] = useState();
  useEffect(() => {
    const options = {
      params: {
        language: "es-MX",
      },
      headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGY4MTZlNzkwOTNkZjVkMmE5MWQwYTVmNmRmMTAyNSIsIm5iZiI6MTczMzIzMTMxNC45MDgsInN1YiI6IjY3NGYwMmQyMTIyMmFkYmI2M2RmMTkwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ORuko-zAsuNPvUihUsUAb_HSBepY9G-xodamfFCenOM'
  }
};
console.log(movieId)

    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
    if (movieId) {
      axios
        .get(url, options)
        .then((res) => setCredits(res.data))
        .catch((err) => console.error(err));
    }
  }, [movieId]);

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Reparto principal</h3>
      <div className={styles.card}>
        {credits?.cast.map((castInfo) => (
          <CastCard 
          key={castInfo.id}
          person={castInfo}/>
        ))}
      </div>
    </section>
  );
};
export default CastSection;

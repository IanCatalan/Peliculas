import axios from "axios";
import { useEffect, useState } from "react";
import FormHome from "../components/Homepage/FormHome";
import MoviesList from "../components/Homepage/MoviesList";
import Pagination from "../components/Homepage/Pagination";



const HomePage = () => {

    const [movies, setMovies] = useState()
    const [selectValue, setSelectValue] = useState('popular')
    const [searchValue, setSearchValue] = useState('')
    const [page, setPage] = useState(1)

    useEffect(() => {
        const options = {
            params: {
                query: searchValue,
                language: 'es-MX',
                page: page
            },
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGY4MTZlNzkwOTNkZjVkMmE5MWQwYTVmNmRmMTAyNSIsIm5iZiI6MTczMzIzMTMxNC45MDgsInN1YiI6IjY3NGYwMmQyMTIyMmFkYmI2M2RmMTkwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ORuko-zAsuNPvUihUsUAb_HSBepY9G-xodamfFCenOM'
            }
          };
          
          const url = `https://api.themoviedb.org/3/movie/${selectValue}`
          const urlOpcional = `https://api.themoviedb.org/3/search/movie`

          axios.get(searchValue ? urlOpcional :url, options)
            .then(res => setMovies(res.data))
            .catch(err => console.error(err));
}, [selectValue, searchValue, page])
    return(
        <div>
            <FormHome
            setSelectValue={setSelectValue}
            setSearchValue={setSearchValue}
            setPage={setPage}
            />
            <Pagination
            page={page}
            totalPages={movies?.total_pages}
            setPage={setPage}
            />
            <MoviesList
            movies={movies}
            />
        </div>
    )
}
export default HomePage
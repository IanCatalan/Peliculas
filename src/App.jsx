import { Routes, Route } from "react-router"
import HomePage from "./routes/HomePage"
import MoviePage from "./routes/MoviePage"

function App() {
  return (
    <>
    <Routes>
        <Route index element={<HomePage></HomePage>}/>
        <Route path='/pelicula/:id' element={<MoviePage/>}/>
    </Routes>
    </>
  )
}

export default App

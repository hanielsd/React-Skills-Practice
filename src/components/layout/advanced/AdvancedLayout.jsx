import { Routes, Route } from 'react-router-dom'
import NotFound from '../../NotFound'
import AdvancedHeader from './AdvancedHeader'
import FavoriteMovies from './FavoriteMovies'
import Genres from './Genres'
import Movie from './Movie'
import Movies from './Movies'
import NewMovie from './NewMovie'
function AdvancedLayout() {
  return (
    <Routes>
      <Route path="movies" element={<AdvancedHeader />}>
        <Route index element={<Movies />} />
        <Route path=":id" element={<Movie />} />
        <Route path="new" element={<NewMovie />} />
        <Route path="favorite" element={<FavoriteMovies />} />
        <Route path="genres" element={<Genres />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AdvancedLayout

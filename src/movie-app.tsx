import { MovieList } from './components/movie-list/movie-list.component';
import { NavBar } from './components/nav-bar/nav-bar.component';
import './movie-app.scss';

export const MovieApp = () => {
  return (
    <>
      <NavBar/>
      <MovieList/>
    </>
  )
};

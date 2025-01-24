import './MovieApp.scss'
import { MovieList } from './components/MovieList/MovieList';
import { NavBar } from './components/NavBar/NavBar';

export const MovieApp = () => {
  return (
    <>
      <NavBar/>
      <MovieList/>
    </>
  )
};

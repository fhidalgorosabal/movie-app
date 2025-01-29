import { NavBar } from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Movie } from "./pages/Movie";
import { SerieTV } from "./pages/SerieTV";
import { Person } from "./pages/Person";

export const MovieApp = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/serie" element={<SerieTV />} />
        <Route path="/person" element={<Person />} />
      </Routes>
    </Router>
  )
};

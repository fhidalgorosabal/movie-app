import { useEffect, useState } from 'react';
import { Movie } from '../../interfaces/movie.interface';
import { MovieCard } from '../movie-card/movie-card.component';
import './movie-list.component.scss';

const API_KEY = '3c27cf2da95a9372232a01814c2dc0ee';
const API_URL = 'https://api.themoviedb.org/3/discover/movie';

export const MovieList = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const getMovies = () => {
        fetch(`${API_URL}?api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);                
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        getMovies();
    }, []);    

    return (
        <ul className="movie-list">
            { 
                movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))
            }
        </ul>
    );
};
import { useEffect, useState } from 'react';
import './MovieList.scss';

interface Movie {
    id: number;
    title: string;
};

const API_KEY = '3c27cf2da95a9372232a01814c2dc0ee';
const API_URL = 'https://api.themoviedb.org/3/discover/movie';

export const MovieList = () => {
    const [movies, setMovies] = useState([]);
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
                movies.map((movie: Movie) => (
                    <li key={movie.id}>
                        <h2>{movie.title}</h2>
                    </li>
                ))
            }
        </ul>
    );
};
import { useEffect, useState } from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../utils/types';
import { API_KEY, API_URL } from '../../utils/constants';
import ReactLoading from 'react-loading';
import './styles.scss';

export const MovieList = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getMovies = () => {
        fetch(`${API_URL}?api_key=${API_KEY}&language=es-ES`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);  
                setLoading(false);              
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        getMovies();
    }, []);    

    return (
        <>  
            { loading 
                ?   <div className='loading-container'><ReactLoading type="spin" color='#f1c40f' height={'5%'} width={'5%'}/></div>
                :   <ul className="movie-list">{ 
                        movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie}/>
                        ))
                    }</ul>
            }            
        </>
    );
};
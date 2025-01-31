import { useEffect, useState } from 'react';
import { DataList } from '../../components/DataList';
import { API_KEY, MOVIE_API_URL } from '../../utils/constants';
import { MovieType } from '../../utils/types';

export const Movie = () => {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getMovies = () => {
        fetch(`${MOVIE_API_URL}?api_key=${API_KEY}&language=es-ES`)
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
        <DataList loading={loading} dataList={movies}/>
    );
};
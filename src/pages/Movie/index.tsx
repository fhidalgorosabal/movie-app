import { useEffect, useState } from 'react';
import { DataList } from '../../components/DataList';
import { Pagination } from '../../components/Pagination';
import { API_KEY, MOVIE_API_URL } from '../../utils/constants';
import { MovieType } from '../../utils/types';

export const Movie = () => {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const getMovies = (page: number) => {
        setLoading(true);
        fetch(`${MOVIE_API_URL}?api_key=${API_KEY}&language=es-ES&page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);  
                setTotalPages(data.total_pages);
                setLoading(false);              
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        getMovies(currentPage);
    }, [currentPage]);  

    return (
        <>
            <DataList loading={loading} dataList={movies}/>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>
    );
};

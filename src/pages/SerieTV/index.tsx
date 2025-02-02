import { useEffect, useState } from "react";
import { DataList } from "../../components/DataList";
import { Pagination } from "../../components/Pagination";
import { API_KEY, SERIE_API_URL } from "../../utils/constants";
import { SerieTVType } from "../../utils/types";

export const SerieTV = () => {
    const [series, setMovies] = useState<SerieTVType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const getSeries = (page: number) => {
        setLoading(true);
        fetch(`${SERIE_API_URL}?api_key=${API_KEY}&language=es-ES&page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);   
                setTotalPages(data.total_pages);               
                setLoading(false);              
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        getSeries(currentPage);
    }, [currentPage]);   
    
    return (
        <>
            <DataList loading={loading} dataList={series}/>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>
    );
};
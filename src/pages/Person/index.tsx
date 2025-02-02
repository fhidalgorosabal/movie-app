import { useEffect, useState } from "react";
import { DataList } from "../../components/DataList";
import { Pagination } from "../../components/Pagination";
import { API_KEY, PERSON_API_URL } from "../../utils/constants";
import { PersonType } from "../../utils/types";

export const Person = () => {
    const [people, setPeople] = useState<PersonType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const getPeople = (page: number) => {
        setLoading(true);
        fetch(`${PERSON_API_URL}?api_key=${API_KEY}&language=es-ES&page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                setPeople(data.results);
                setTotalPages(data.total_pages);
                setLoading(false);                 
            })
            .catch((error) => console.error(error));
    };
    
    useEffect(() => {
        getPeople(currentPage);
    }, [currentPage]); 
    
    return (
        <>
            <DataList loading={loading} dataList={people}/>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>
    );
};
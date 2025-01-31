import { useEffect, useState } from "react";
import { DataList } from "../../components/DataList";
import { API_KEY, SERIE_API_URL } from "../../utils/constants";
import { SerieTVType } from "../../utils/types";

export const SerieTV = () => {
    const [series, setMovies] = useState<SerieTVType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getSeries = () => {
        fetch(`${SERIE_API_URL}?api_key=${API_KEY}&language=es-ES`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);                  
                setLoading(false);              
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        getSeries();        
    }, []);    
    return (
        <DataList loading={loading} dataList={series}/>
    );
};
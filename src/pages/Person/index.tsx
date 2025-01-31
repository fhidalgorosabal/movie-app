import { useEffect, useState } from "react";
import { DataList } from "../../components/DataList";
import { API_KEY, PERSON_API_URL } from "../../utils/constants";
import { PersonType } from "../../utils/types";

export const Person = () => {
    const [people, setPeople] = useState<PersonType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getPeople = () => {
        fetch(`${PERSON_API_URL}?api_key=${API_KEY}&language=es-ES`)
            .then((res) => res.json())
            .then((data) => {
                setPeople(data.results);
                setLoading(false);                 
            })
            .catch((error) => console.error(error));
    };
    
    useEffect(() => {
        getPeople();
    }, []);  
    return (
        <DataList loading={loading} dataList={people}/>
    );
};
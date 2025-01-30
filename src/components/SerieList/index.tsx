import { useEffect, useState } from 'react';
import { MovieCard } from '../MovieCard';
import { SerieTV } from '../../utils/types';
import { API_KEY, SERIE_API_URL } from '../../utils/constants';
import ReactLoading from 'react-loading';
import '../../assets/styles/_data-list.scss';

export const SerieList = () => {
    const [series, setMovies] = useState<SerieTV[]>([]);
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
        <>  
            { loading 
                ?   <div className='loading-container'>
                        <ReactLoading type="spin" color='#cea811' height={'5%'} width={'5%'}/>
                    </div>
                :   <ul className="data-list">
                        {   
                            series.map((serie) => (
                                <MovieCard key={serie.id} data={serie}/>
                            ))
                        }
                    </ul>
            }            
        </>
    );
};
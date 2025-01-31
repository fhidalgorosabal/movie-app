import { StartRating } from "../StartRating";
import { CardType, MovieType, PersonType, SerieTVType } from "../../utils/types";
import { IMG_URL } from "../../utils/constants";
import './styles.scss';

export const Card = (props: CardType) => { 
    const data = props?.data;    
    const getTitle = (data: MovieType | SerieTVType | PersonType) => {
        return data.title ? data.title : (data as SerieTVType).name;
    };
    
    return (
        <li className="card">
            <div className="poster">
                <img 
                    src={`${IMG_URL}${data.poster_path ? data.poster_path : (data as PersonType).profile_path}`} 
                    alt={getTitle(data)} 
                />
            </div>
            <div className="info">
                <h5 className="title">{getTitle(data)}</h5>
                { data.vote_average > 0 && <StartRating rating={data.vote_average} />}
                <div className="hidden-content">
                    { data.overview &&
                        <p className="description">{
                            data.overview.length > 100
                                ? `${data.overview.substring(0, 100)}...`
                                : data.overview
                        }</p>                     
                    }
                    {
                        ((data as PersonType).known_for && (data as PersonType).known_for.length > 0) &&
                        <p className="description">Películas: {
                            (data as PersonType).known_for.map((movie) => getTitle(movie)).join(', ')
                        }</p>
                    }
                    <button className="btn-default">Ver mas</button>
                </div>
            </div>
        </li>
    );   
};
import { StartRating } from "../StartRating";
import { Card, Movie, SerieTV } from "../../utils/types";
import { IMG_URL } from "../../utils/constants";
import './styles.scss';

export const MovieCard = (props: Card) => { 
    const data = props?.data;    
    const getTitle = (data: Movie | SerieTV) => {
        return data.title ? data.title : (data as SerieTV).name;
    };
    
    return (
        <li className="movie-card">
            <div className="movie-poster">
                <img 
                    src={`${IMG_URL}${data.poster_path}`} 
                    alt={getTitle(data)} 
                />
            </div>
            <div className="movie-info">
                <h5 className="movie-title">{getTitle(data)}</h5>
                { data.vote_average > 0 && <StartRating rating={data.vote_average} />}
                <div className="hidden-content">
                    { data.overview &&
                        <p className="movie-description">{
                            data.overview.length > 100
                                ? `${data.overview.substring(0, 100)}...`
                                : data.overview
                        }</p>                     
                    }
                    <button className="btn-default">Ver mas</button>
                </div>
            </div>
        </li>
    );   
};
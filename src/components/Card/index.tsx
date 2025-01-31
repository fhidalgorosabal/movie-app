import { StartRating } from "../StartRating";
import { CardType, MovieType, SerieTVType } from "../../utils/types";
import { IMG_URL } from "../../utils/constants";
import './styles.scss';

export const Card = (props: CardType) => { 
    const data = props?.data;    
    const getTitle = (data: MovieType | SerieTVType) => {
        return data.title ? data.title : (data as SerieTVType).name;
    };
    
    return (
        <li className="card">
            <div className="poster">
                <img 
                    src={`${IMG_URL}${data.poster_path}`} 
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
                    <button className="btn-default">Ver mas</button>
                </div>
            </div>
        </li>
    );   
};
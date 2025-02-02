import { StartRating } from "../StartRating";
import { CardType, MovieType, PersonType, SerieTVType } from "../../utils/types";
import { IMG_URL } from "../../utils/constants";
import "./styles.scss";

export const Card = ({ data }: CardType) => {
    const getTitle = (item: MovieType | SerieTVType | PersonType) => 'title' in item 
        ? item.title 
        : (item as SerieTVType).name;    
    const posterPath = data.poster_path || (data as PersonType).profile_path;
    const overviewText = ( data.overview && data.overview?.length > 100) 
        ? `${data.overview.substring(0, 100)}...` 
        : data.overview;
    const knownForMovies = 'known_for' in data 
        ? (data as PersonType).known_for.map(getTitle).join(", ") 
        : null;

    return (
        <li className="card">
            <div className="poster">
                <img src={`${IMG_URL}${posterPath}`} alt={getTitle(data)} />
            </div>
            <div className="info">
                <h5 className="title">{getTitle(data)}</h5>
                {data.vote_average > 0 && <StartRating rating={data.vote_average} />}
                <div className="hidden-content">
                    {data.overview && <p className="description">{overviewText}</p>}
                    {knownForMovies && <p className="description">Producciones: {knownForMovies}</p>}
                    <button className="btn-default">Ver más</button>
                </div>
            </div>
        </li>
    );
};

import { Card } from "../../interfaces/card.interface";
import { StartRating } from "../start-rating/start-rating.component";
import './movie-card.component.scss';

const IMG_URL = 'https://image.tmdb.org/t/p/original';

export const MovieCard = (props: Card) => { 
    const movie = props.movie;
    
    return (
        <li className="movie-card">
            <div className="movie-poster">
                <img 
                    src={`${IMG_URL}${movie.poster_path}`} 
                    alt={movie.title} 
                />
            </div>
            <div className="movie-info">
                <h5 className="movie-title">{movie.title}</h5>
                { movie.vote_average > 0 && <StartRating rating={movie.vote_average} />}
                <div className="hidden-content">
                    { movie.overview &&
                        <p className="movie-description">{
                            movie.overview.length > 100
                                ? `${movie.overview.substring(0, 100)}...`
                                : movie.overview
                        }</p>                     
                    }
                    <button className="btn-default">Ver mas</button>
                </div>
            </div>
        </li>
    );   
};
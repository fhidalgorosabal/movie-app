import { Card } from "../../interfaces/card.interface";
import './movie-card.component.scss';

export const MovieCard = (props: Card) => { 
    const movie = props.movie;
    
    return (
        <li className="movie-card">
            <h5 className="title">{movie.title}</h5>
            <p className="description">{movie.overview}</p>
            <img 
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                alt={movie.title} 
            />
            <p>{movie.vote_average}</p>
        </li>
    );   
};
import { useEffect } from "react";
import { GenreMap, IMG_URL, LanguageMap } from "../../utils/constants";
import { ModalProps, MovieType, PersonType, SerieTVType } from "../../utils/types";
import "./styles.scss";
import { StartRating } from "../StartRating";

export const ModalInfo = ({ data, onClose }: ModalProps) => {
  
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const getTitle = (item: MovieType | SerieTVType | PersonType) => 'title' in item 
          ? item.title 
          : (item as SerieTVType).name; 
  const releaseDate = data.release_date ? data.release_date : (data as SerieTVType).first_air_date;
  const originalTitle = data.original_title ? data.original_title : (data as SerieTVType).original_name;
  const knownForMovies = 'known_for' in data 
        ? (data as PersonType).known_for.map(getTitle).join(", ") 
        : null;

  return (
    <div className="modal-overlay">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <div className="modal-content">
          <img
            src={`${IMG_URL}${data.poster_path || (data as PersonType).profile_path}`}
            alt={getTitle(data)}
          />
          <div className="modal-info">
            <h2>{getTitle(data)}</h2>
            {data.vote_average > 0 && <StartRating rating={data.vote_average} />}
            {data.overview && <p>{data.overview}</p>}
            {releaseDate && <p>Fecha de estreno: {releaseDate}</p>}
            {data.genre_ids && <p>Géneros: {data.genre_ids.map((genre) => GenreMap[genre]).join(", ")}</p>}
            {data.adult && <p>No apto para menores</p>}
            {data.original_language && <p>Idioma original: {LanguageMap[data.original_language]}</p>}
            {(originalTitle && !knownForMovies) && <p>Título original: {originalTitle}</p>}
            {knownForMovies && <p>Producciones: {knownForMovies}</p>}
            {'known_for_department' in data && <p>Departamento: {(data as PersonType).known_for_department}</p>}
            {'gender' in data && <p>Género: {(data as PersonType).gender === 1 ? 'Femenino' : 'Masculino'}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

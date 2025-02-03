import { useEffect } from "react";
import { StartRating } from "../StartRating";
import { GenreMap, LanguageMap, IMG_URL } from "../../utils/constants";
import { CardType, PersonType } from "../../utils/types";
import "./styles.scss";

interface ModalProps {
  data: CardType["data"];
  onClose: () => void;
}

export const ModalInfo = ({ data, onClose }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <div className="modal-content">
          <img
            src={`${IMG_URL}${data.poster_path || (data as PersonType).profile_path}`}
            alt={'title' in data ? data.title : (data as PersonType).name}
          />
          <div className="modal-info">
            <h2>{'title' in data ? data.title : (data as PersonType).name}</h2>
            {data.vote_average > 0 && <StartRating rating={data.vote_average} />}
            {data.overview && <p>{data.overview}</p>}
            {'release_date' in data && <p>Fecha de estreno: {data.release_date}</p>}
            {'first_air_date' in data && <p>Fecha de estreno: {data.first_air_date}</p>}
            {data.genre_ids && <p>Géneros: {data.genre_ids.map((genre) => (GenreMap[genre])).join(', ')}</p>}
            {data.adult && <p>No apto para menores</p>}
            {data.original_language && <p>Idioma original: {LanguageMap[data.original_language]}</p>}
            {data.original_title && <p>Título original: {data.original_title}</p>}        
            {('original_name' in data) && <p>Nombre original: {data.original_name}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export interface MovieType {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview?: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title?: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface SerieTVType extends MovieType {
    first_air_date: string;
    name: string;
    origin_country: string[];
    original_name: string;
}

export interface PersonType {
    adult: boolean;
    gender: number;
    id: number;
    known_for: MovieType[];
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
}

export interface CardType { 
    data: MovieType | SerieTVType;
}

export interface DataListProps {
    loading: boolean;
    dataList: MovieType[] | SerieTVType[];
}
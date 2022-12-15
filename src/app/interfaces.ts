export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  budget: string;
  revenue: number;
  genres: any[];
  runtime: number;
  production_companies: any[];
}

export interface Trailer {
  key: string;
}

export interface ActorInfo {
  also_known_as?: any[];
  biography?: string;
  birthday?: string;
  deathday?: any;
  id?: number;
  imdb_id?: number;
  known_for_department?: string;
  gender?: number;
  homepage?: any;
  name?: string;
  place_of_birth?: string;
  popularity?: string;
  profile_path?: string;
}

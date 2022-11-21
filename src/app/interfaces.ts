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
  production_companies: any[]
}

export interface Trailer{
  key: string
}

// export interface Reviews{
//   results: Result[]
// }
//
// export interface Result{
//   author_details: {};
//   content: string
// }



